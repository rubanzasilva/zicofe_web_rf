import React from 'react';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-coffee-brown mb-4">The ZICOFE Story</h2>
          <p className="text-xl text-coffee-brown max-w-3xl mx-auto">
            A journey of determination and growth in Central Uganda since 1984
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            {/* YouTube Video Embed */}
            <div className="w-full rounded-lg shadow-lg overflow-hidden" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              <iframe
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                src="https://www.youtube.com/embed/QlLvgWv06eY"
                title="ZICOFE - Zigoti Coffee Works"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-coffee-brown mb-4">41 Years of Excellence</h3>
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
            <Link
              href="/about"
              className="inline-block bg-coffee-brown text-white px-6 py-3 rounded-md hover:bg-coffee-dark transition-colors"
            >
              Read Our Full Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;