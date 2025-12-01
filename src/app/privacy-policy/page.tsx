import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - ZICOFE',
  description: 'Privacy policy for ZICOFE - Premium Ugandan Coffee. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-coffee-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-coffee-brown mb-6">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">1. Introduction</h2>
              <p className="text-gray-700 mb-4">
                Welcome to ZICOFE ("we," "our," or "us"). We are committed to protecting your personal information and your right to privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
              </p>
              <p className="text-gray-700">
                Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
            </section>

            {/* Information We Collect */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">2. Information We Collect</h2>

              <h3 className="text-xl font-semibold text-coffee-medium mb-3">2.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Fill out contact forms</li>
                <li>Subscribe to our newsletter</li>
                <li>Make inquiries about our products</li>
                <li>Request information about bulk orders</li>
                <li>Contact us directly via email or phone</li>
              </ul>
              <p className="text-gray-700 mb-4">
                This information may include:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company name</li>
                <li>Mailing address</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3 className="text-xl font-semibold text-coffee-medium mb-3">2.2 Automatically Collected Information</h3>
              <p className="text-gray-700 mb-4">
                When you visit our website, we automatically collect certain information about your device, including:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>IP address</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referring URLs</li>
                <li>Pages viewed and time spent on pages</li>
                <li>Date and time of visits</li>
              </ul>
            </section>

            {/* How We Use Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use the information we collect or receive:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>To respond to your inquiries and fulfill your requests</li>
                <li>To send you marketing and promotional communications (with your consent)</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website usage and trends</li>
                <li>To protect against fraudulent or illegal activity</li>
                <li>To comply with legal obligations</li>
                <li>To process orders and manage customer relationships</li>
              </ul>
            </section>

            {/* Cookies and Tracking */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">4. Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies and similar tracking technologies to track activity on our website and store certain information.
                You can control cookie preferences through our cookie consent banner or your browser settings.
              </p>
              <p className="text-gray-700 mb-4">
                For more detailed information about the cookies we use, please see our <a href="/cookie-policy" className="text-coffee-brown underline hover:text-coffee-dark">Cookie Policy</a>.
              </p>
            </section>

            {/* Sharing Your Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">5. Sharing Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share your information in the following situations:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf (e.g., email service providers, analytics providers, hosting services)</li>
                <li><strong>Business Transfers:</strong> We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information where we are legally required to do so to comply with applicable law, governmental requests, or legal processes</li>
                <li><strong>With Your Consent:</strong> We may disclose your information for any other purpose with your consent</li>
              </ul>
            </section>

            {/* Data Retention */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">6. Data Retention</h2>
              <p className="text-gray-700 mb-4">
                We will retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy,
                unless a longer retention period is required or permitted by law.
              </p>
            </section>

            {/* Your Privacy Rights */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">7. Your Privacy Rights</h2>
              <p className="text-gray-700 mb-4">
                Depending on your location, you may have the following rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Access:</strong> Request access to your personal information</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Restriction:</strong> Request restriction of processing of your personal information</li>
                <li><strong>Data Portability:</strong> Request transfer of your information to another service</li>
                <li><strong>Objection:</strong> Object to processing of your personal information</li>
                <li><strong>Withdraw Consent:</strong> Withdraw your consent at any time</li>
              </ul>
              <p className="text-gray-700 mb-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
            </section>

            {/* Third-Party Websites */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">8. Third-Party Websites</h2>
              <p className="text-gray-700 mb-4">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.
                We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </section>

            {/* Security */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">9. Security of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use administrative, technical, and physical security measures to protect your personal information.
                However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* Children's Privacy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">10. Children's Privacy</h2>
              <p className="text-gray-700 mb-4">
                Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
                If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            {/* International Data Transfers */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">11. International Data Transfers</h2>
              <p className="text-gray-700 mb-4">
                Your information may be transferred to and maintained on computers located outside of your state, province, country,
                or other governmental jurisdiction where data protection laws may differ. By using our website, you consent to such transfers.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">12. Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time. The updated version will be indicated by an updated "Last Updated" date.
                We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.
              </p>
            </section>

            {/* Contact Us */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">13. Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or comments about this Privacy Policy, or wish to exercise your privacy rights, please contact us at:
              </p>
              <div className="bg-coffee-light p-6 rounded-lg">
                <p className="text-coffee-brown font-semibold mb-2">ZICOFE</p>
                <p className="text-gray-700">Email: privacy@zicofe.com</p>
                <p className="text-gray-700">Address: Uganda</p>
              </div>
            </section>
          </div>

          {/* Back to Home Link */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <a
              href="/"
              className="inline-block px-6 py-3 bg-coffee-brown text-white rounded-md hover:bg-coffee-dark transition-colors"
            >
              Back to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
