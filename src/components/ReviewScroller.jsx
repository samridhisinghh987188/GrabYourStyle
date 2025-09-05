import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    quote: "She instantly understood my style and brought it to life — I felt confident like never before",
    name: "Zoya"
  },
  {
    quote: "I used to hate shopping. Now I actually look forward to getting dressed",
    name: "Sam"
  },
  {
    quote: "My coworkers keep asking who my stylist is. That says everything",
    name: "Priya S."
  },
  {
    quote: "Professional, creative, and easy to work with — highly recommend!",
    name: "Michael P."
  },
];

function ReviewScroller() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full bg-blue-900 flex flex-col pb-10  relative">
      <div className='pt-10 pb-10'>
        
      </div>

      {/* Testimonial marquee area */}
      <div className="flex justify-center items-center flex-grow">
        <AnimatePresence mode='wait'>
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg text-white rounded-xl shadow-md text-center"
          >
            <p className="text-xl mb-6 break-words whitespace-normal font-semibold">
              “{testimonials[currentIndex].quote}”
            </p>
            <div className="text-sm font-semibold text-yellow-400">
              - {testimonials[currentIndex].name}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-center gap-8 pt-10">
        <button
          onClick={prevTestimonial}
          className="bg-white text-black rounded-full px-6 py-2 shadow hover:bg-gray-300 transition"
        >
          &lt; Prev
        </button>
        <button
          onClick={nextTestimonial}
          className="bg-white text-black rounded-full px-6 py-2 shadow hover:bg-gray-300 transition"
        >
          Next &gt;
        </button>
      </div>

     
    </div>
  );
}

export default ReviewScroller;
