import React from 'react'
import { IoPlaySharp } from "react-icons/io5";
import heroTextImage from '../images/hero-text.png'

const Hero = () => {
  return (
    <div className=' bg-no-repeat bg-center bg-auto hero-image max-w-6xl mx-auto pt-[9rem] md:pt-[7rem] md:pb-[9rem] px-2 sm:px-6 lg:px-8 '>
        <h1 className='font-reco text-blue text-6xl md:text-7xl md:text-start tracking-wide'>
            Let your skin<br/>
            Going <span ><img src={heroTextImage} alt='a girl with clear skin' className='inline'/></span> Out.
        </h1>
        <p className='md:text-start text-light-black mt-8'>We want to bring to the world through our products<br />
         that very special feeling joy, healthy and <br />
        positive energy.</p>
        <div className='text-center flex justify-center md:justify-start md:text-start flex mt-[3rem]'>
            <button
                type="button"
                className="bg-orange px-7 py-4  relative font-semibold rounded-full text-text-white flex hover:bg-bg hover:text-orange transition duration-500 delay-200 ease-in-out"
                >
                <span>Shop Now </span>
                <span className='ml-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </span>
                
            </button>
            <button
                type="button"
                className="bg-bg px-7 py-4  relative font-semibold rounded-full text-blue flex items-center transition hover:bg-blue hover:text-text-white duration-500 delay-300 ease-in-out"
                >
                <span className='mr-1 '>
                <IoPlaySharp />
                </span>
                <span>How to use</span>
            </button>
        </div>
        



    </div>
  )
}

export default Hero