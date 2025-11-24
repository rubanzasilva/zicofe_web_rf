import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();

    const {
      unit,
      quantity,
      coffeeType,
      coffeeGrade,
      fullName,
      email,
      phone,
      company,
      address,
      notes
    } = body;

    // Validate required fields
    if (!quantity || !coffeeType || !coffeeGrade || !fullName || !email || !phone || !address) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Calculate totals
    const totalKg = unit === 'kg' ? parseFloat(quantity) : parseFloat(quantity) * 60;
    const totalBags = unit === 'bags' ? parseFloat(quantity) : parseFloat(quantity) / 60;

    // Create email HTML
    const emailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #4a2c2a; color: white; padding: 20px; text-align: center; }
            .content { background-color: #f9f9f9; padding: 20px; }
            .section { margin-bottom: 20px; }
            .section-title { font-weight: bold; color: #4a2c2a; margin-bottom: 10px; font-size: 16px; }
            .info-row { padding: 8px 0; border-bottom: 1px solid #e0e0e0; }
            .label { font-weight: bold; color: #666; }
            .value { color: #333; }
            .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>New Coffee Order Request</h1>
            </div>

            <div class="content">
              <div class="section">
                <div class="section-title">Order Details</div>
                <div class="info-row">
                  <span class="label">Coffee Type:</span>
                  <span class="value">${coffeeType.charAt(0).toUpperCase() + coffeeType.slice(1)}</span>
                </div>
                <div class="info-row">
                  <span class="label">Coffee Grade:</span>
                  <span class="value">${coffeeGrade}</span>
                </div>
                <div class="info-row">
                  <span class="label">Quantity:</span>
                  <span class="value">${totalKg.toFixed(2)} KG (${totalBags.toFixed(2)} bags)</span>
                </div>
              </div>

              <div class="section">
                <div class="section-title">Customer Information</div>
                <div class="info-row">
                  <span class="label">Full Name:</span>
                  <span class="value">${fullName}</span>
                </div>
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span class="value">${email}</span>
                </div>
                <div class="info-row">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>
                ${company ? `
                <div class="info-row">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>
                ` : ''}
                <div class="info-row">
                  <span class="label">Delivery Address:</span>
                  <span class="value">${address.replace(/\n/g, '<br>')}</span>
                </div>
              </div>

              ${notes ? `
              <div class="section">
                <div class="section-title">Additional Notes</div>
                <div class="info-row">
                  <span class="value">${notes.replace(/\n/g, '<br>')}</span>
                </div>
              </div>
              ` : ''}
            </div>

            <div class="footer">
              <p>This order was submitted through the ZICOFE website</p>
              <p>Please respond to the customer within 24 hours</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.RESEND_TO_EMAIL || 'orders@zicofe.com',
      replyTo: email,
      subject: `New Coffee Order Request from ${fullName}`,
      html: emailHtml,
    });

    return NextResponse.json(
      { success: true, message: 'Order submitted successfully', data },
      { status: 200 }
    );

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to submit order', details: error.message },
      { status: 500 }
    );
  }
}
