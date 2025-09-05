import React from 'react';
import { Link } from 'react-router-dom';

function Work() {
  return (
    <div className="bg-orange-100 h-screen w-full  flex">
      <div className='h-full w-full flex-1'>
        <img src='/getready.jpg' alt='ready'  className='w-full h-full object-cover'/>

      </div>
      <div  className='flex-1  w-1/2 bg-indigo-900 pt-20 pl-20 justify-center items-center'>
        <p className="text-sm text-violet-300 uppercase tracking-wide mb-2">
            Meet the Stylists
          </p>
          <h2 className="text-4xl font-extrabold text-pink-200 mb-6">
            Our grooming experts
          </h2>

          <ul className="space-y-4 divide-y divide-white/20 mb-8 max-w-xl">
            <li className="pt-4 first:pt-0">Trained in personalized styling & care</li>
            <li className="pt-4">Certified beauty and grooming artists</li>
            <li className="pt-4">Experience across events, weddings & makeovers</li>
            <li className="pt-4">Background-verified and professionally onboarded</li>
          </ul>
         <Link
  to="/contact"
  className="inline-block px-6 py-2 border border-white text-white rounded hover:bg-white hover:text-[#1A1A40] transition duration-200"
>
  Book Your Glow-Up
</Link>

        
      </div>
      
    </div>
  );
}

export default Work;
