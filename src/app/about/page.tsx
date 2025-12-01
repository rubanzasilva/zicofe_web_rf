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
                In 1996, Enock passed the operational reins of the family business to Rose, a pivotal
                moment in Zigoti Coffee's journey. Under Rose's leadership, the company flourished and
                expanded into a respected export enterprise, with a roastery and the renowned Zigoti Café
                and Hotel adding to its legacy.
              </p>
              <p>
                Rose is a prominent figure and a respected leader in Uganda's coffee industry, actively
                engaged in organisations like Uganda International Women's Coffee Alliance (IWCA) and
                promoting Ugandan coffee worldwide. She is recognised as a strong female figure, earning
                immense respect for her contributions to the industry, particularly in empowering women.
              </p>
              <p>
                She is passionate about elevating the coffee culture in Uganda, especially emphasising
                the significance of Robusta coffee, which is native to Ugandan soils. But Rose's greatest
                commitment is to improving women's lives through proactive initiatives, from providing seed
                funding to women's groups to developing innovative solutions like briquette production from
                coffee waste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">
            Our Achievements & Recognition
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-coffee-light/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-coffee-brown mb-4">First in East Africa</h3>
              <p className="text-coffee-brown mb-4">
                In 2005, Zigoti achieved a significant milestone by obtaining certification from the
                Japanese Agricultural Standard (JAS), making it the first company in East Africa to
                receive such recognition.
              </p>
              <p className="text-coffee-brown">
                This accomplishment paved the way for the establishment of our own coffee shops in
                Nagoya City and Nishin City, Japan. Zigoti's pioneering efforts in accessing the Asian
                market were acknowledged by the President of Uganda and the Uganda Coffee Development
                Authority (UCDA).
              </p>
            </div>

            <div className="bg-coffee-brown text-white p-8 rounded-lg">
              <div className="grid md:grid-cols-2 gap-8 items-center mb-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Award-Winning Excellence</h3>
                  <p className="mb-4">
                    Recognised for its exceptional qualities and scoring 85+ cupping scores, our coffee won
                    the Best of the Pearl Robusta Coffee title in the Uganda Coffee Development Authority
                    (UCDA's) Taste of the Pearl Coffee Competition.
                  </p>
                  <p className="text-lg font-semibold">
                    Our coffee boasts flavours of: Raisins • Cocoa • Black Currants • Winey Notes • Vanilla • Coffee Blossoms
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-lg p-4 aspect-square relative">
                    <Image
                      src="/awards/award-1.jpg"
                      alt="ZICOFE Award 1"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 aspect-square relative">
                    <Image
                      src="/awards/award-2.jpg"
                      alt="ZICOFE Award 2"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 aspect-square relative">
                    <Image
                      src="/awards/award-3.jpg"
                      alt="ZICOFE Award 3"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                    />
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 aspect-square relative">
                    <Image
                      src="/awards/award-4.jpg"
                      alt="ZICOFE Award 4"
                      fill
                      style={{ objectFit: 'contain' }}
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-coffee-light/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-coffee-brown mb-4">Global Reach</h3>
              <p className="text-coffee-brown">
                Our coffee made history as the first Ugandan coffee to reach Japan and is now sought
                after worldwide, with our markets spanning across Europe, the USA, Asia, and Africa.
                We hold Fair Trade certification and maintain our commitment to quality at every step
                of production.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-coffee-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">
            Inspiring Change, One Bean at a Time
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-white p-8 rounded-lg">
              <div className="text-5xl font-bold text-coffee-brown mb-2">12,000</div>
              <div className="text-xl font-semibold text-coffee-brown mb-3">Small-Scale Farmers</div>
              <p className="text-coffee-brown">
                Working across Mityana, Mubende, Masaka, and Luweero districts
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg">
              <div className="text-5xl font-bold text-coffee-brown mb-2">4,000</div>
              <div className="text-xl font-semibold text-coffee-brown mb-3">Women Empowered</div>
              <p className="text-coffee-brown">
                Leading the way in coffee production and entrepreneurship
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-lg">
              <div className="text-5xl font-bold text-coffee-brown mb-2">7,000</div>
              <div className="text-xl font-semibold text-coffee-brown mb-3">Youth Engaged</div>
              <p className="text-coffee-brown">
                Building the future of Uganda's coffee industry
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coffee-brown text-lg">
              We collaborate with a network of 12,000 small-scale farmers across central Uganda's key
              coffee-producing districts. Each farm typically looks after around 450 trees of both Robusta
              and Arabica varieties, such as SL.14, SL.28, and KP 423, providing farmers with a reliable
              source of income while promoting sustainable agricultural practices.
            </p>
          </div>
        </div>
      </section>

      {/* Values/Mission Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">Our Values & Mission</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center bg-coffee-light/30 p-8 rounded-lg">
              <div className="bg-coffee-brown rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-3">Our Core Traits</h3>
              <p className="text-coffee-brown">
                We pride ourselves on accountability, honesty, and professionalism in every aspect
                of our business.
              </p>
            </div>
            <div className="text-center bg-coffee-light/30 p-8 rounded-lg">
              <div className="bg-coffee-brown rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-3">Our Promise</h3>
              <p className="text-coffee-brown">
                At Zigoti, we're dedicated to delivering high-quality coffee while nurturing our
                relationships with customers, suppliers, and the community, ensuring ethical and
                responsible business practices.
              </p>
            </div>
            <div className="text-center bg-coffee-light/30 p-8 rounded-lg">
              <div className="bg-coffee-brown rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🌍</span>
              </div>
              <h3 className="text-xl font-semibold text-coffee-brown mb-3">Our Vision</h3>
              <p className="text-coffee-brown">
                To always be a leading high-quality coffee exporter in Uganda.
              </p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto bg-coffee-brown text-white p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-4 text-center">Our Goals & Aspirations</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>To continue to operate at full production capacity with a fully traceable supply chain</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Looking ahead, we're focused on maintaining consistent production levels and developing specialised product grades for a discerning market</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">•</span>
                <span>Expanding market reach while continuing to support the local community and environment</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-coffee-light">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">Our Journey Through Time</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">1984</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-coffee-brown pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">The Beginning</h3>
                <p className="text-coffee-brown">
                  Rose Nakayenga Kato and her late husband, Enock Kisuule Kato, acquire land in
                  Zigoti and establish the first coffee farm, laying the foundation for what would
                  become a leading coffee enterprise.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">1996</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-coffee-brown pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">New Leadership Era</h3>
                <p className="text-coffee-brown">
                  Enock passes the operational reins of the family business to Rose, marking a pivotal
                  moment. Under Rose's leadership, the company flourishes and expands into a respected
                  export enterprise.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">2005</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-coffee-brown pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">First in East Africa</h3>
                <p className="text-coffee-brown">
                  Zigoti achieves JAS certification from the Japanese Agricultural Standard, becoming
                  the first company in East Africa to receive such recognition. This paves the way for
                  coffee shops in Nagoya City and Nishin City, Japan.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">2022/23</span>
              </div>
              <div className="flex-grow pb-8 border-l-2 border-coffee-brown pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">Award-Winning Excellence</h3>
                <p className="text-coffee-brown">
                  Our coffee wins the Best of the Pearl Robusta Coffee title in UCDA's Taste of the Pearl
                  Coffee Competition, with cupping scores of 85+. Production reaches 4,700 tons of green
                  beans.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="flex-shrink-0 w-24 text-right">
                <span className="text-2xl font-bold text-coffee-brown">2025</span>
              </div>
              <div className="flex-grow pl-6">
                <h3 className="text-xl font-semibold text-coffee-brown mb-2">Today & Beyond</h3>
                <p className="text-coffee-brown">
                  ZICOFE continues to grow, supporting 12,000 farmers (including 4,000 women and 7,000 youth)
                  and exporting premium coffee to markets across Europe, USA, Asia, and Africa. We're working
                  towards a production goal of 8,000 tons by 2028.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Leadership Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl font-bold text-coffee-brown mb-12 text-center">
            Leadership & Legacy
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-coffee-light/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-coffee-brown mb-4">
                Rose Nakayenga Kayondo Kato
              </h3>
              <p className="text-lg font-semibold text-coffee-brown mb-3">
                Owner · Founder · Managing Director
              </p>
              <div className="space-y-3 text-coffee-brown">
                <p>
                  Rose is a prominent figure and respected leader in Uganda's coffee industry, actively
                  engaged in organisations like Uganda International Women's Coffee Alliance (IWCA) and
                  promoting Ugandan coffee worldwide. She served as UCDA board member (2014-2017) and
                  currently serves as the IWCA Treasurer.
                </p>
                <p>
                  She is passionate about elevating the coffee culture in Uganda, especially emphasising
                  the significance of Robusta coffee, which is native to Ugandan soils. Rose's greatest
                  commitment is to improving women's lives through proactive initiatives.
                </p>
                <p className="italic font-semibold">
                  "Be proactive, transparent, believe in yourself, and embrace family businesses for
                  the prosperity of your home."
                </p>
              </div>
            </div>

            <div className="bg-coffee-light/30 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-coffee-brown mb-4">
                The Next Generation
              </h3>
              <p className="text-coffee-brown mb-4">
                Zigoti's leadership today includes Rose's sons, who have been immersed in the coffee
                industry from a young age, developing a deep understanding and passion for the trade.
              </p>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 relative">
                    <Image
                      src="/team/enock-ssenyonga.jpg"
                      alt="Mr. Enock Ssenyonga"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <h4 className="font-semibold text-coffee-brown mb-2">Mr. Enock Ssenyonga</h4>
                  <p className="text-sm text-coffee-brown">Finance Director</p>
                </div>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 relative">
                    <Image
                      src="/team/william-muyanja.jpg"
                      alt="Mr. William Muyanja"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <h4 className="font-semibold text-coffee-brown mb-2">Mr. William Muyanja</h4>
                  <p className="text-sm text-coffee-brown">Chief Operations Officer</p>
                </div>
                <div className="text-center">
                  <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden bg-gray-200 relative">
                    <Image
                      src="/team/wilson-ssukwe.jpg"
                      alt="Mr. Wilson Ssukwe"
                      fill
                      style={{ objectFit: 'cover' }}
                      className="rounded-full"
                    />
                  </div>
                  <h4 className="font-semibold text-coffee-brown mb-2">Mr. Wilson Ssukwe</h4>
                  <p className="text-sm text-coffee-brown">Marketing Manager</p>
                </div>
              </div>
              <p className="text-coffee-brown mt-6">
                Their commitment to the family business honours their mother's legacy and sets the stage
                for continued innovation and success in the coffee industry. Their skills and experience
                contribute significantly to the company's growth and profitability.
              </p>
            </div>

            <div className="bg-coffee-brown text-white p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Dedicated to Continuous Learning</h3>
              <p>
                To continue growing and meeting the dynamic needs of the global coffee business, we emphasise
                building relationships and engaging in constant learning. Our dedicated team actively participates
                in coffee exhibitions, webinars, online training sessions, and conferences both at home and
                internationally, ensuring we remain informed about the latest ideas and technological advancements
                within the industry.
              </p>
            </div>
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
