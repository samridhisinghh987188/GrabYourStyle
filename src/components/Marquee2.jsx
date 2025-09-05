import React from 'react'

function Marquee2() {
  return (
    <div className='bg-white w-full'>
         <div 
        className='text border-t-2 border-b-2 border-white flex gap-10 whitespace-nowrap overflow-hidden my-1'>
            <motion.h1 
            className=' text-[10vw] font-bold text-white leading-none'
             animate={{x:['0%','-100%']}}
        transition={{
            repeat:Infinity,
            duration:12,
            ease:'linear'
        }}
        >
        WE ARE OCHI</motion.h1>
         <motion.h1 
            className=' text-[10vw] font-bold text-white leading-none'
             animate={{x:['0%','-100%']}}
        transition={{
            repeat:Infinity,
            duration:12,
            ease:'linear'
        }}
        >
        WE ARE OCHI</motion.h1>
         <motion.h1 
            className=' text-[10vw] font-bold text-white leading-none'
             animate={{x:['0%','-100%']}}
        transition={{
            repeat:Infinity,
            duration:12,
            ease:'linear'
        }}
        >
        WE ARE OCHI</motion.h1>
            
        </div>
      
    </div>
  )
}

export default Marquee2
