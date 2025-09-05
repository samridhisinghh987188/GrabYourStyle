import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  const features = [
    'Personalized Recommendations',
    'Top-rated Stylists',
    'In-app Booking',
    'Real-time Chat',
    'Loyalty Rewards',
    'Secure Payments',
    'Verified Reviews',
    'Flexible Scheduling',
  ];

  return (
    <div className="w-full bg-black">
      {/* Call-to-action Section */}
      <div className="px-10 py-20 bg-orange-100">
        <h1 className="font-semibold mt-20 pt-10 text-[6vw] font-playfair flex gap-6 pl-10 leading-none">
          Start your first <br /> demo trials
        </h1>
        <Link to="/BookingPage">
          <button className="rounded-xl border-black hover:bg-gray-400 border px-8 mx-10 text-lg mt-10 bg-white text-black font-semibold">
            Get Start
          </button>
        </Link>
      </div>

      
      <div className="bg-[#FDF6E3] shadow-lg py-10 px-6 text-center">
        <h2 className="text-xl font-semibold mb-6 text-gray-800 font-playfair">
          Included in your experience
        </h2>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-700 max-w-4xl mx-auto">
          {features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <span className="text-pink-400">▲</span>
              {feature}
            </div>
          ))}
        </div>
        <p className="mt-6 text-orange-500 text-sm italic">More to be announced…</p>
      </div>

      
      
    </div>
  );
}

export default Footer;
