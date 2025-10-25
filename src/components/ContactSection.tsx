"use client";
import React from 'react';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="py-20 bg-coffee-light">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">Contact Us</h2>
          <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
            Reach out to us for inquiries, orders, or partnerships
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4">Get In Touch</h3>
            <p className="text-coffee-brown mb-6">
              Visit our roastery at Plot 104, 5th Street Industrial Area, Bugolobi, Kampala.
            </p>
            <p className="text-coffee-brown mb-6">
              Call us at: +256 701 465 283 or +256 762 764 298
            </p>
            <p className="text-coffee-brown mb-6">
              Email: sales@zicofe.com
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-coffee-brown mb-4">Send Us a Message</h3>
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-coffee-brown mb-2 font-medium">Your Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none" />
              </div>
              <div>
                <label htmlFor="email" className="block text-coffee-brown mb-2 font-medium">Your Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="block text-coffee-brown mb-2 font-medium">Message</label>
                <textarea id="message" rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-coffee-brown focus:outline-none"></textarea>
              </div>
              <button type="submit" className="bg-coffee-brown text-white px-6 py-3 rounded-md hover:bg-coffee-dark transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;