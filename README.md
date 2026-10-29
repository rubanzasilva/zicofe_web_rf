This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Activate Order Emails

The Shop Now form sends order requests through [FormSubmit](https://formsubmit.co/). No account, API key, or verified sending domain is required.

Orders go to **silva@zicofe.com** by default. To use a different inbox, set `FORMSUBMIT_EMAIL` in `.env.local` and in your hosting provider's server environment:

```env
FORMSUBMIT_EMAIL=silva@zicofe.com
```

1. Start the site and submit a clearly marked test order through `/shop`.
2. Open the FormSubmit activation email in the receiving inbox (check spam too) and confirm it.
3. Submit another test order and verify it arrives with the coffee details, quantity, customer contacts, delivery address, and notes. Replying to the notification addresses the customer.

The first submission triggers activation; forwarding starts after confirmation. Repeat activation when changing inboxes, if requested. Restart or redeploy after changing environment variables. Old `RESEND_*` settings are no longer used.

The form stays on the page during submission. Requests are validated on both client and server, and only FormSubmit acceptance produces a success message. If the service fails or times out, the customer's entries remain in the form with email and WhatsApp contact links. FormSubmit acceptance does not confirm inbox delivery. This AJAX integration uses FormSubmit's table email template with CAPTCHA disabled.

Run `npm test` to check form radio grouping, order validation, notification details, and FormSubmit success and failure handling without sending real emails.

### 3. Run the Development Server

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
# zicofe_web_rf
# zicofe_web_rf
# zicofe_web_rf
