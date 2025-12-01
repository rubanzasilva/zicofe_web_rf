import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy - ZICOFE',
  description: 'Cookie policy for ZICOFE - Premium Ugandan Coffee. Learn about the cookies we use and how to manage your preferences.',
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-coffee-light">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-coffee-brown mb-6">Cookie Policy</h1>
          <p className="text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">1. What Are Cookies?</h2>
              <p className="text-gray-700 mb-4">
                Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website.
                They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
              <p className="text-gray-700">
                Cookies help us understand how you use our website, remember your preferences, and improve your overall experience.
              </p>
            </section>

            {/* How We Use Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-700 mb-4">
                We use cookies for several reasons detailed below. In most cases, there are no industry standard options for disabling cookies
                without completely disabling the functionality and features they add to this site.
              </p>
            </section>

            {/* Types of Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">3. Types of Cookies We Use</h2>

              {/* Necessary Cookies */}
              <div className="mb-6 bg-coffee-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-brown mb-3">3.1 Necessary Cookies (Always Active)</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are essential for the website to function properly. They enable core functionality such as security,
                  network management, and accessibility. You cannot opt-out of these cookies.
                </p>
                <p className="text-gray-700 mb-2"><strong>Examples include:</strong></p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Cookie Consent Status:</strong> Remembers your cookie preferences</li>
                  <li><strong>Session Cookies:</strong> Keep you logged in during your visit</li>
                  <li><strong>Security Cookies:</strong> Help ensure secure browsing</li>
                </ul>
                <p className="text-gray-700 text-sm italic">Duration: Session or up to 1 year</p>
              </div>

              {/* Analytics Cookies */}
              <div className="mb-6 bg-coffee-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-brown mb-3">3.2 Analytics Cookies (Optional)</h3>
                <p className="text-gray-700 mb-4">
                  These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
                  This helps us improve our website and services.
                </p>
                <p className="text-gray-700 mb-2"><strong>Examples include:</strong></p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Google Analytics:</strong> Tracks page views, user behavior, and website performance</li>
                  <li><strong>Usage Statistics:</strong> Collects data on which pages are most popular</li>
                  <li><strong>Error Tracking:</strong> Helps us identify and fix technical issues</li>
                </ul>
                <p className="text-gray-700 mb-2"><strong>Data collected may include:</strong></p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Pages visited and time spent on each page</li>
                  <li>How you arrived at our site (referral source)</li>
                  <li>Browser type and device information</li>
                  <li>General location (country/city level)</li>
                  <li>Anonymous user IDs</li>
                </ul>
                <p className="text-gray-700 text-sm italic">Duration: Up to 2 years</p>
              </div>

              {/* Marketing Cookies */}
              <div className="mb-6 bg-coffee-light p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-coffee-brown mb-3">3.3 Marketing Cookies (Optional)</h3>
                <p className="text-gray-700 mb-4">
                  These cookies are used to track visitors across websites. The intention is to display advertisements that are
                  relevant and engaging for individual users and thereby more valuable for publishers and third-party advertisers.
                </p>
                <p className="text-gray-700 mb-2"><strong>Examples include:</strong></p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li><strong>Advertising Cookies:</strong> Track your browsing habits to show relevant ads</li>
                  <li><strong>Social Media Cookies:</strong> Enable sharing content on social platforms</li>
                  <li><strong>Retargeting Cookies:</strong> Show you ads for products you've viewed</li>
                </ul>
                <p className="text-gray-700 mb-2"><strong>Third-party services may include:</strong></p>
                <ul className="list-disc pl-6 mb-4 text-gray-700">
                  <li>Facebook Pixel</li>
                  <li>Google Ads</li>
                  <li>LinkedIn Insights</li>
                  <li>Other advertising networks</li>
                </ul>
                <p className="text-gray-700 text-sm italic">Duration: Up to 2 years</p>
              </div>
            </section>

            {/* First-Party vs Third-Party */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">4. First-Party vs Third-Party Cookies</h2>
              <div className="mb-4">
                <h3 className="text-lg font-semibold text-coffee-medium mb-2">First-Party Cookies</h3>
                <p className="text-gray-700">
                  These are set directly by our website and are only readable by us. We use these to remember your preferences
                  and improve your experience.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-coffee-medium mb-2">Third-Party Cookies</h3>
                <p className="text-gray-700">
                  These are set by external services we use, such as Google Analytics or social media platforms.
                  These cookies are subject to the respective privacy policies of these external services.
                </p>
              </div>
            </section>

            {/* Managing Cookies */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">5. How to Manage Your Cookie Preferences</h2>

              <h3 className="text-xl font-semibold text-coffee-medium mb-3">5.1 Through Our Cookie Consent Banner</h3>
              <p className="text-gray-700 mb-4">
                When you first visit our website, you'll see a cookie consent banner that allows you to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Accept all cookies</li>
                <li>Accept only necessary cookies</li>
                <li>Customize your preferences by cookie category</li>
              </ul>
              <p className="text-gray-700 mb-6">
                You can change your preferences at any time by clearing your browser cookies and revisiting our site,
                or by using the cookie settings option if available on our website.
              </p>

              <h3 className="text-xl font-semibold text-coffee-medium mb-3">5.2 Through Your Browser Settings</h3>
              <p className="text-gray-700 mb-4">
                Most web browsers allow you to control cookies through their settings. You can set your browser to:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li>Block all cookies</li>
                <li>Block third-party cookies only</li>
                <li>Delete cookies when you close your browser</li>
                <li>Alert you when a cookie is being set</li>
              </ul>

              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                <p className="text-gray-700">
                  <strong>Please note:</strong> Disabling cookies may affect the functionality of this and many other websites you visit.
                  Disabling cookies will usually result in also disabling certain functionality and features of this site.
                </p>
              </div>

              <p className="text-gray-700 mb-2"><strong>Browser-specific instructions:</strong></p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
                <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
                <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
                <li><strong>Edge:</strong> Settings → Privacy, search, and services → Cookies and site permissions</li>
              </ul>
            </section>

            {/* Cookie Details Table */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">6. Detailed Cookie Information</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                  <thead className="bg-coffee-brown text-white">
                    <tr>
                      <th className="px-4 py-3 text-left">Cookie Name</th>
                      <th className="px-4 py-3 text-left">Category</th>
                      <th className="px-4 py-3 text-left">Purpose</th>
                      <th className="px-4 py-3 text-left">Duration</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700">
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">cookieConsent</td>
                      <td className="px-4 py-3">Necessary</td>
                      <td className="px-4 py-3">Stores your cookie preferences</td>
                      <td className="px-4 py-3">1 year</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">_ga</td>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">Google Analytics - Distinguishes users</td>
                      <td className="px-4 py-3">2 years</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">_gid</td>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">Google Analytics - Distinguishes users</td>
                      <td className="px-4 py-3">24 hours</td>
                    </tr>
                    <tr className="border-b bg-gray-50">
                      <td className="px-4 py-3 font-mono text-sm">_gat</td>
                      <td className="px-4 py-3">Analytics</td>
                      <td className="px-4 py-3">Google Analytics - Throttle request rate</td>
                      <td className="px-4 py-3">1 minute</td>
                    </tr>
                    <tr className="border-b">
                      <td className="px-4 py-3 font-mono text-sm">_fbp</td>
                      <td className="px-4 py-3">Marketing</td>
                      <td className="px-4 py-3">Facebook Pixel - Track conversions</td>
                      <td className="px-4 py-3">3 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-gray-600 text-sm mt-4 italic">
                Note: This table shows common cookies we may use. Actual cookies may vary based on your consent preferences and enabled features.
              </p>
            </section>

            {/* Do Not Track */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">7. Do Not Track Signals</h2>
              <p className="text-gray-700 mb-4">
                Some browsers have a "Do Not Track" feature that lets you tell websites you do not want to have your online activities tracked.
                Currently, we do not respond to browser "Do Not Track" signals, but you can manage your cookie preferences as described above.
              </p>
            </section>

            {/* Updates to Policy */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">8. Updates to This Cookie Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal,
                or regulatory reasons. Please revisit this page periodically to stay informed about our use of cookies.
              </p>
            </section>

            {/* More Information */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">9. More Information</h2>
              <p className="text-gray-700 mb-4">
                For more information about how we handle your personal data, please see our <a href="/privacy-policy" className="text-coffee-brown underline hover:text-coffee-dark">Privacy Policy</a>.
              </p>
              <p className="text-gray-700 mb-4">
                If you have questions about our use of cookies, please contact us:
              </p>
              <div className="bg-coffee-light p-6 rounded-lg">
                <p className="text-coffee-brown font-semibold mb-2">ZICOFE</p>
                <p className="text-gray-700">Email: privacy@zicofe.com</p>
                <p className="text-gray-700">Address: Uganda</p>
              </div>
            </section>

            {/* Additional Resources */}
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-coffee-brown mb-4">10. Additional Resources</h2>
              <p className="text-gray-700 mb-4">
                For more information about cookies and how to manage them, visit:
              </p>
              <ul className="list-disc pl-6 mb-4 text-gray-700">
                <li><a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer" className="text-coffee-brown underline hover:text-coffee-dark">AllAboutCookies.org</a></li>
                <li><a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer" className="text-coffee-brown underline hover:text-coffee-dark">YourOnlineChoices.com</a></li>
                <li><a href="https://www.networkadvertising.org/choices" target="_blank" rel="noopener noreferrer" className="text-coffee-brown underline hover:text-coffee-dark">Network Advertising Initiative</a></li>
              </ul>
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
