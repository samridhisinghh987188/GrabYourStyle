import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="bg-white text-gray-900 pt-20">
        <section>
            <div className="text-center">
        <h1 className="text-5xl font-bold tracking-tight leading-tight">
          PERSONAL STYLIST
        </h1>
        <h2 className="text-6xl font-serif tracking-wide mt-2 mb-4">
          NOW IN YOUR CITY
        </h2>
        <p className="text-sm uppercase tracking-wide text-gray-500">
          Personal Stylist & Makeover Artist
        </p>
      </div>

      {/* Image + Bio */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-12 max-w-5xl mx-auto">
        {/* Rotated Image */}
        <div className="mb-10 md:mb-0 md:mr-10 transform rotate-3 shadow-lg">
          <img
            src="/about1.jpg"
            alt="Stylist"
            className="w-[280px] h-auto rounded-md object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="max-w-xl text-left">
          <h3 className="text-2xl font-semibold mb-4">
            We style with passion & purpose.
          </h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            We a professional stylist who blends creativity and expertise to
            create stunning transformations. Whether it's a wedding, shoot,
            event, or just a confidence boost — I'm here to bring out your
            best.
          </p>
          <p className="mt-4 text-gray-600">
            With years of experience across fashion, beauty, and personal
            styling, I focus on personalized looks that align with your unique
            personality and goals. Let’s make magic happen!
          </p>

          {/* Skills / Tags */}
          <div className="flex flex-wrap gap-3 mt-6">
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
              Personal Styling
            </span>
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
              Event Makeovers
            </span>
            <span className="bg-black text-white px-4 py-1 rounded-full text-sm">
              Wardrobe Revamp
            </span>
          </div>
        </div>
      </div>
        </section>

      <section className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-12">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">1. Select Your City</h3>
            <p>Discover available stylists in your area.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">2. Browse Profiles</h3>
            <p>View portfolios, ratings, and specialties.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">3. Book a Service</h3>
            <p>Choose your desired service and schedule.</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">4. Get Styled</h3>
            <p>Enjoy a personalized session with your stylist.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto text-left">
          <div className="p-6 bg-gray-50 rounded-md shadow">
            <h3 className="font-semibold text-2xl mb-2">Verified Stylists in Every City</h3>
            <p>All our stylists are verified professionals ensuring quality service.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow">
            <h3 className="font-semibold text-2xl mb-2">Easy Online Booking</h3>
            <p>Book your stylist online within minutes without any hassle.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow">
            <h3 className="font-semibold text-2xl mb-2">Wide Range of Services</h3>
            <p>From styling and makeup to wardrobe consultations and event prep.</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow">
            <h3 className="font-semibold text-2xl mb-2">Personalized Consultations</h3>
            <p>Tailored styling advice to match your personality and lifestyle.</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-12">Meet the Stylists</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-300 mb-4 rounded-md">
              <img src="/aboutstylist2.jpg" alt="makeup" />
            </div>
            <h3 className="font-semibold text-xl mb-1"> <br /> </h3>
            <p>Makeup specialist</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-300 mb-4 rounded-md">
              <img src="/aboutstylist3.jpg" alt="makeup" />
            </div>
            <h3 className="font-semibold text-xl mb-1"> <br /> </h3>
            <p>Haircut</p>
          </div>
          <div className="p-6 bg-white rounded-md shadow hover:shadow-lg transition">
            <div className="h-40 bg-gray-300 mb-4 rounded-md">
              <img src="/aboutstylist1.jpg" alt="makeup" />
            </div>
            <h3 className="font-semibold text-xl mb-1"> <br /> </h3>
            <p>Fashion/Wardrobe Stylist</p>
          </div>
        </div>
        <h2 className="pt-10 font-bold text-[2vw]">Book your online slot or meet them in your city</h2>
      </section>

      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-12">Client Testimonials</h2>
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="p-6 bg-gray-50 rounded-md shadow">
            <p>"I found a stylist in my city who totally transformed my look!"</p>
            <p className="mt-2 font-semibold">- Client Name</p>
          </div>
          <div className="p-6 bg-gray-50 rounded-md shadow">
            <p>"The booking process was seamless, and the stylist was fantastic."</p>
            <p className="mt-2 font-semibold">- Client Name</p>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gray-100 text-center">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto mb-4">
          Grab Your Style is committed to making personal styling accessible to everyone, no matter the city. Our platform connects you with verified professionals who bring your look to life.
        </p>
        <p className="max-w-3xl mx-auto">
          From everyday makeovers to event styling, we provide tools and trusted stylists so that everyone can feel confident in their appearance.
        </p>
      </section>


      <section className="py-20 px-6 bg-white text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Look?</h2>
        <Link to = '/contact'>
        
        <button className="bg-[#1d3f8e] px-8 py-4 rounded-md font-semibold text-white hover:scale-105 transition-transform">
          Find a Stylist Near You
        </button>
        </Link>
      </section>

    </div>
  );
}

export default About;

