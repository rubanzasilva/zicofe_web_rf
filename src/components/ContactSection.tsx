import React from 'react';
import { Mail, Phone, MessageCircle, MapPin, Send, PhoneCall, Navigation } from 'lucide-react';

const contactCards = [
  {
    title: 'Email us', hint: 'Quotes, orders and partnerships', icon: Mail, actionIcon: Send,
    details: [{ label: 'sales@zicofe.com', href: 'mailto:sales@zicofe.com' }],
    action: 'Send an email', href: 'mailto:sales@zicofe.com', primary: true, external: false,
  },
  {
    title: 'Call us', hint: 'Speak with our team', icon: Phone, actionIcon: PhoneCall,
    details: [
      { label: '+256 702 720720', href: 'tel:+256702720720' },
      { label: '+256 752 028 886', href: 'tel:+256752028886' },
    ],
    action: 'Call us', href: 'tel:+256702720720', primary: false, external: false,
  },
  {
    title: 'WhatsApp', hint: 'Message our sales team', icon: MessageCircle, actionIcon: MessageCircle,
    details: [{ label: '+256 752 028 886', href: 'https://wa.me/256752028886' }],
    action: 'Chat now', href: 'https://wa.me/256752028886', primary: false, external: true,
  },
  {
    title: 'Visit us', hint: 'Our roastery', icon: MapPin, actionIcon: Navigation,
    details: [{ label: 'Plot 104, 5th Street Industrial Area, Bugolobi, Kampala', href: '' }],
    action: 'Get directions',
    href: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent('Zigoti Coffee Works, Plot 104, 5th Street Industrial Area, Bugolobi, Kampala, Uganda')}`,
    primary: false, external: true,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-24 bg-coffee-light py-20 text-coffee-brown">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 id="contact-heading" className="mb-4 text-4xl font-bold">Contact Us</h2>
          <p className="mx-auto max-w-3xl text-xl">
            Reach out to us for inquiries, orders, or partnerships
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contactCards.map(({ title, hint, icon: Icon, actionIcon: ActionIcon, details, action, href, primary, external }) => (
            <article key={title} className="flex min-w-0 flex-col rounded-xl border border-coffee-brown/10 bg-white p-5 lg:p-6">
              <div className="mb-5 flex items-start gap-4 md:flex-col md:items-center md:text-center">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-coffee-light md:h-14 md:w-14">
                  <Icon size={24} aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <h3 className="mb-1 text-xl font-semibold">{title}</h3>
                  <p className="mb-3 hidden text-sm text-coffee-medium md:block">{hint}</p>
                  <div className="space-y-1 break-words">
                    {details.map(({ label, href: detailHref }) => (
                      detailHref ? (
                        <a
                          key={label}
                          href={detailHref}
                          target={external ? '_blank' : undefined}
                          rel={external ? 'noopener noreferrer' : undefined}
                          className="block rounded-sm hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coffee-brown"
                        >
                          {label}
                        </a>
                      ) : <p key={label}>{label}</p>
                    ))}
                  </div>
                </div>
              </div>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className={`mt-auto flex min-h-[44px] items-center justify-center gap-2 rounded-lg border border-coffee-brown px-3 py-3 text-center font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-coffee-brown ${primary ? 'bg-coffee-brown text-white hover:bg-coffee-dark' : 'text-coffee-brown hover:bg-coffee-light'}`}
              >
                <ActionIcon size={18} aria-hidden="true" />
                {action}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
