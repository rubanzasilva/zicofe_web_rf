import React from 'react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Our Story - ZICOFE',
  description: 'Learn about ZICOFE\'s journey from 1984 to becoming a leading coffee producer in Uganda, supporting thousands of farmers and communities.',
};

const AboutPage = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-coffee-light py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-coffee-brown mb-6">The ZICOFE Story</h1>
            <p className="text-2xl text-coffee-brown">
              A journey of determination and growth in Central Uganda since 1984
            </p>
          </div>
        </div>
      </section>

      {/* Origins Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-full h-96 bg-gray-200 rounded-lg shadow-lg relative">
                <Image
                  src="/coffee-farm.jpg"
                  alt="Zigoti Coffee Farm"
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-coffee-brown mb-6">Our Origins</h2>
              <p className="text-coffee-brown mb-6">
                In 1984, riding on a motorbike along a dusty dirt road, Rose Nakayenga Kato
                and her late husband, Enock Kisuule Kato, sought out the perfect land for
                cultivating coffee. They found it – a parcel of rich and promising land – in the
                rural town of Zigoti, in central Uganda.
              </p>
              <p className="text-coffee-brown mb-6">
                They acquired it, and so Zigoti Coffee was born. Rose and Enock dedicated
                themselves to nurturing their dream, tirelessly working the land to establish
                their coffee farm, mill, roastery and even a beautiful hotel, Enro Hotel.
              </p>
              <p className="text-coffee-brown">
                Over the years, their hard work paid off, and Zigoti Coffee grew into a thriving
                enterprise, renowned for its high-quality Robusta and Arabica coffee beans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section className="py-20 bg-coffee-light">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-coffee-brown mb-6 text-center">41 Years of Excellence</h2>
            <div className="space-y-6 text-coffee-brown">
              <p>
                Today, ZICOFE stands as a testament to Rose and Enock's vision and perseverance.
                The company has become a leading coffee producer in Uganda, exporting premium
                quality coffee to markets around the world.
              </p>
              <p>
                [Add more content here about the company's growth, milestones, achievements,
                certifications, awards, and expansion over the years.]
              </p>
              <p>
                [You can add multiple paragraphs detailing the journey, challenges overcome,
                key decisions made, partnerships formed, and how the business evolved.]
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values/Mission Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">Our Values & Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-coffee-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-3">Quality</h3>
              <p className="text-coffee-brown">
                We are committed to producing the finest Robusta and Arabica coffee beans,
                maintaining strict quality standards at every step.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coffee-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-3">Community</h3>
              <p className="text-coffee-brown">
                Supporting 12,000 small-scale farmers and their families across central Uganda,
                empowering communities through fair trade and education.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-coffee-light rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-3">Sustainability</h3>
              <p className="text-coffee-brown">
                Promoting climate-smart agricultural practices to protect our environment
                for future generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section (Optional - add more content as needed) */}
      <section className="py-20 bg-coffee-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">Our Journey</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">1984</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-coffee-brown pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">The Beginning</h3>
                <p className="text-coffee-brown">
                  Rose and Enock Kato acquire land in Zigoti and establish the first coffee farm.
                </p>
              </div>
            </div>

            {/* Add more timeline entries here */}
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">[Year]</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-coffee-brown pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">[Milestone Title]</h3>
                <p className="text-coffee-brown">
                  [Add description of milestone, achievement, or significant event]
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">2025</span>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">Today</h3>
                <p className="text-coffee-brown">
                  ZICOFE continues to grow, supporting 12,000 farmers and exporting premium
                  coffee to markets worldwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Leadership Section (Optional) */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">Our Leadership</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-coffee-brown text-center mb-12">
              [Add information about key team members, leadership, management structure, etc.]
            </p>
            {/* Add team member cards here if desired */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-coffee-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-coffee-brown mb-6">Join Our Journey</h2>
            <p className="text-xl text-coffee-brown mb-8">
              Whether you're a coffee enthusiast, a potential partner, or interested in learning
              more about our work, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/#contact" className="bg-coffee-brown text-white px-8 py-3 rounded-md hover:bg-coffee-dark transition-colors">
                Get In Touch
              </a>
              <a href="/#beans" className="border border-coffee-brown text-coffee-brown px-8 py-3 rounded-md hover:bg-white transition-colors">
                View Our Coffee
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
