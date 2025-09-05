import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const serviceItems = [
  {
    title: 'Balayage Highlights',
    image: '/serviceitem1.jpg',
    description: 'Soft, hand-painted highlights for a sun-kissed finish.',
    bg: '#ADD8E6', 
  },
  {
    title: "Men's Haircut",
    image: '/serviceitem2.jpg',
    description: 'Sharp, clean cuts tailored to your style and face shape.',
    bg: '#90EE90', 
  },
  {
    title: 'Brazilian Blowout',
    image: '/serviceitem3.jpg',
    description: 'Smooth and straighten your hair with long-lasting results.',
    bg: '#E6E6FA', 
  },
  {
     title: 'Style & Color Education',
    image: '/serviceitem4.jpg',
    description: 'Experience a personalized styling session where our expert stylists guide you toward outfits that flatter your body shape, enhance your personality, and simplify your wardrobe choices.',
    bg: '#FFDAB9', 
  },
  {
    title: 'Wedding Glam',
    image: '/serviceitem5.jpg',
    description: 'Elegant bridal styles and flawless makeup for your big day.',
    bg: '#FFFACD', 
  },
  {
    title: 'Color Correction',
    image: '/serviceitem6.jpg',
    description: 'Fix color mishaps and bring back vibrancy with expert color correction',
    bg: '#0BC5EA', 
  },
  
 
];

const detailedServices = [
  {
    title: 'Hair Makeovers',
    image: '/servicehairmakeover.jpg',
    content: `Our hair makeovers are tailored to completely transform your look...`,
  },
  {
    title: 'Makeup & Styling',
    image: '/servicemakeup.jpg',
    content: `Our professional makeup artists create stunning looks for every occasion...`,
  },
  {
    title: 'Weddings & Engagements',
    image: '/servicewedding.jpg',
    content: `Make your special day unforgettable with our bridal hair and makeup services...`,
  },
  {
    title: 'Style & Color Education',
    image: '/servicestyle.jpg',
    content: `Understanding your body type and color palette is key to personal style...`,
  },
];


function ScrollMarquee({ text }) {
  const controls = useAnimation();
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(0);

  useEffect(() => {
    function onScroll() {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currentScrollY;
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    controls.start({
      x: scrollDir === 'down' ? ['0%', '-50%'] : ['-50%', '0%'],
      transition: { repeat: Infinity, duration: 20, ease: 'linear' },
    });
  }, [scrollDir, controls]);

  return (
    <div className="overflow-hidden whitespace-nowrap bg-yellow-300 py-2">
      <motion.div
        animate={controls}
        className="inline-flex text-pink-600 font-semibold text-xl"
        style={{ whiteSpace: 'nowrap' }}
      >
        <span className="px-20">{text}</span>
        <span className="px-20">{text}</span>
      </motion.div>
    </div>
  );
}


function Services() {
  const [hoverBg, setHoverBg] = useState(null);

  const defaultBackground = 'url("/pink-texture.jpg")';

  return (
    <div
      className="min-h-screen pt-20 text-gray-800 bg-cover bg-center transition-colors duration-500"
     
    >
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center text-center bg-gray-100">
        <img
          src="/servicebg.jpg"
          alt="Hair tools background"
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 max-w-2xl px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Indulge In The Ultimate Hair Experience
          </h1>
          <p className="text-gray-200 mb-6">
            We’re here to help you achieve your hair goals. Schedule your signature style session today.
          </p>
          <Link
            to="/bookingpage"
            className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Discover Our Services
          </Link>
        </div>
      </section>

      {/* Marquee */}
      <ScrollMarquee  text="Luxury Hair Makeovers • Professional Makeup & Styling • Bridal & Wedding Packages • Style & Color Education" />

      {/* Services Section */}
      <section className="py-20 px-6 text-center bg-white/80 shadow-xl rounded-2xl max-w-7xl mx-auto my-16" style={{
        backgroundImage: hoverBg ? 'none' : defaultBackground,
        backgroundColor: hoverBg || undefined,
      }}>
      
        <h2 className="text-4xl font-bold mb-4">Elevate Your Look</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-12">
          At LuxeLocks, we offer a wide range of services to help you look and feel your best.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {serviceItems.map((service, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-100 hover:bg-pink-100 rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoverBg(service.bg)}
              onMouseLeave={() => setHoverBg(null)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
                <p className="text-gray-700 text-sm">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Detailed Descriptions */}
      <section className="relative bg-white/70 py-24 px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Full Range of Services
        </h2>

        <div className="space-y-24 max-w-7xl mx-auto">
          {detailedServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className={`flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 ${
                index % 2 !== 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              <div className="relative w-full md:w-1/2 h-[350px] overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-2xl" />
              </div>

              <div className="w-full md:w-1/2 text-gray-800">
                <h3 className="text-3xl font-semibold mb-4">{service.title}</h3>
                <p className="text-lg leading-relaxed text-gray-700">{service.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-pink-50 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Style?</h2>
        <p className="text-gray-600 mb-6">Book a session with our expert stylists today.</p>
        <Link
          to="/demo"
          className="bg-pink-600 hover:bg-pink-700 text-white font-medium px-8 py-3 rounded-lg transition"
        >
          Chat with us
        </Link>
      </section>
    </div>
  );
}

export default Services;
