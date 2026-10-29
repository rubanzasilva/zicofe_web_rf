import React from 'react';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-coffee-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">Contact Us</h2>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto">
            Reach out to us for inquiries, orders, or partnerships
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4">Get In Touch</h3>
            <p className="text-gray-800 mb-6">
              Visit our roastery at Plot 104, 5th Street Industrial Area, Bugolobi, Kampala.
            </p>
            <p className="text-gray-800 mb-6">
              Call us at: +256 701 465 283 or +256 762 764 298
            </p>
            <p className="text-gray-800">
              Email: <a href="mailto:sales@zicofe.com" className="text-coffee-brown underline">sales@zicofe.com</a>
            </p>
          </div>
          <div className="p-8 text-center">
            <a
              href="mailto:sales@zicofe.com?subject=Inquiry%20for%20ZICOFE"
              className="inline-flex items-center justify-center bg-coffee-brown text-white px-6 py-3 rounded-sm hover:bg-coffee-dark transition-colors"
            >
              <Mail size={18} aria-hidden="true" className="mr-2" />
              Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
