import { img } from 'framer-motion/client'
import React from 'react'

function Approach() {
  return (
    <div className='min-h-screen w-full  bg-gray-800 pb-10 pt-10  overflow-hidden'>
        <div className='px-10 pr-[8rem]'>
            <h2 className='font-semibold text-[3vw] text-yellow-500 leading-none mt-10'>At Grab Your Style, we connect you with professional stylists who bring your fashion vision to life.
                <br />Discover, connect, and express your unique style with confidence.
            </h2>
            <p className='pt-10 text-yellow-500'>At Grab Your Style, we collaborate with trendsetters, beauty professionals, and creative minds shaping the future of fashion and personal styling.From bridal makeovers to editorial shoots, we bring style visions to life through curated talent and seamless booking experiences.We believe a perfect blend of aesthetic intuition and real-world coordination (with a hint of glam) makes styling effortless and unforgettable.</p>
        </div>
        <div className='border-t border-gray-500 mt-20'>
            <div className='mt-10 px-10 pl-10 '>
                <h1 className='font-semibold text-[2vw] text-yellow-500'>Behind The Secnes</h1>
            </div>
            <div className='overflow-visible rounded-2xl mx-auto pl-20 flex relative'>
                <img src='/Bts.jpg' className='rounded-2xl mt-10 object-cover h-[600px] w-auto transition-transform duration-300 ease-in-out transform hover:scale-105' />
                <button className='bg-white text-black border border-gray-800  rounded-xl font-semibold hover:bg-gray-400 absolute bottom-6 right-10 shadow text-sm px-4 py-2
                transition-transform duration-300 ease-in-out transform hover:scale-105'>Read More</button>
            </div>
            

        </div>
    </div>
  )
}

export default Approach
