import React from 'react';

function Landing() {
  return (
    <section className="relative h-screen overflow-hidden">
  <img
    src="/landingtest.jpg"
    alt="Stylist hero"
    className="absolute inset-0 w-full h-full object-cover"
    style={{ objectPosition: '50% 25%' }} // adjust vertical offset
  />
  <div className="absolute inset-0 bg-black/30"></div>
  <div className="relative z-10 flex flex-col justify-center items-center h-full text-center px-6">
    {/* Hero Headline */}
    <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4">
      Your Styling, Your Way
    </h1>
    {/* Tagline */}
    <p className="text-lg md:text-xl text-white mb-8 max-w-xl">
      Book expert stylists at your convenience — tailored grooming and fashion services made seamless.
    </p>
    {/* CTA */}
    <button className="px-8 py-3 bg-[#b8744c] hover:bg-[#a6633f] text-white rounded-md text-lg font-semibold transition">
      Book Your Stylist
    </button>
  </div>
</section>

  );
}

export default Landing;
