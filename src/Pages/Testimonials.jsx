import React from "react";

const data = {
  services: [
    { title: "Online Styling", desc: "Get personalized online styling sessions.", img: "/images/service1.jpg" },
    { title: "In-Person Styling", desc: "Book stylists in your city for offline sessions.", img: "/images/service2.jpg" },
    { title: "Makeover Packages", desc: "Complete transformation packages tailored to you.", img: "/images/service3.jpg" }
  ],
  testimonials: [
    { name: "Sarah K.", role: "Entrepreneur", review: "Amazing stylist! Online session was seamless.", img: "/images/client1.jpg", rating: 5 },
    { name: "Alex M.", role: "Designer", review: "Loved the offline session, very professional.", img: "/images/client2.jpg", rating: 5 },
    { name: "Jannis F.", role: "Web Designer", review: "Super friendly and helpful.", img: "/images/client3.jpg", rating: 5 }
  ]
};

const TestimonialsPage = () => {
  return (
    <div className="bg-gray-50">
      
      {/* Services Section */}
      <section className="py-16 text-center max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.map((s, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-md p-6">
              <img src={s.img} alt={s.title} className="h-40 w-full object-cover rounded-t-xl mb-4"/>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 text-center max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">What Our Clients Say</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {data.testimonials.map((t, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl shadow-md max-w-xs flex flex-col items-center text-center">
              <img src={t.img} alt={t.name} className="w-20 h-20 rounded-full mb-4 object-cover"/>
              <p className="text-gray-700 mb-2">"{t.review}"</p>
              <p className="font-semibold">{t.name}</p>
              <p className="text-gray-500 text-sm">{t.role}</p>
              <div className="text-yellow-400 mt-2">
                {"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default TestimonialsPage;

