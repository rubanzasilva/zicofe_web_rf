import { NextRequest, NextResponse } from 'next/server';
import { validateOrder } from '../../../lib/order';

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Please provide a valid order.' }, { status: 400 });
  }

  let order;
  try {
    order = validateOrder(body);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Please check your order details.' },
      { status: 400 }
    );
  }

  const recipient = process.env.FORMSUBMIT_EMAIL?.trim() || 'silva@zicofe.com';
  const totalKg = order.unit === 'kg' ? order.quantity : order.quantity * 60;
  const totalBags = order.unit === 'bags' ? order.quantity : order.quantity / 60;
  const pageUrl = `${req.nextUrl.origin}/shop`;

  try {
    const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(recipient)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Referer: pageUrl,
        Origin: req.nextUrl.origin,
      },
      signal: AbortSignal.timeout(15000),
      body: JSON.stringify({
        name: order.fullName,
        email: order.email,
        phone: order.phone,
        company: order.company || 'Not provided',
        coffee_type: order.coffeeType === 'arabica' ? 'Arabica' : 'Robusta',
        coffee_grade: order.coffeeGrade,
        quantity: `${order.quantity} ${order.unit}`,
        total_kilograms: totalKg.toFixed(2),
        total_bags: totalBags.toFixed(2),
        delivery_address: order.address,
        notes: order.notes || 'None',
        _subject: `New ZICOFE Coffee Order Request from ${order.fullName.replace(/[\r\n]/g, ' ')}`,
        _replyto: order.email,
        _template: 'table',
        _captcha: 'false',
        _url: pageUrl,
      }),
    });
    const result = await response.json().catch(() => null);

    if (response.status >= 500 || response.status === 429 || !result) {
      console.error('FormSubmit is unavailable:', response.status);
      return NextResponse.json(
        { error: 'Our order email service is temporarily unavailable. Please try again shortly or contact our sales team.' },
        { status: 503 }
      );
    }

    const message = typeof result.message === 'string' ? result.message : '';
    if (/activat|confirm your email/i.test(message)) {
      console.error('FormSubmit requires inbox activation. Check the receiving inbox for its confirmation email.');
      return NextResponse.json(
        { error: 'Online ordering is awaiting email activation. Please contact our sales team to place your order.' },
        { status: 503 }
      );
    }

    // FormSubmit can return its success flag as a string.
    if (!response.ok || (result?.success !== true && result?.success !== 'true')) {
      console.error('FormSubmit rejected the order request:', response.status);
      return NextResponse.json(
        { error: 'Your order request could not be sent. Please try again or contact our sales team.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Order submitted successfully' });
  } catch (error) {
    const reason = error instanceof Error ? error.name : 'UnknownError';
    console.error('FormSubmit could not be reached:', reason);
    return NextResponse.json(
      { error: 'Our order email service could not be reached. Please try again shortly or contact our sales team.' },
      { status: 503 }
    );
  }
}
