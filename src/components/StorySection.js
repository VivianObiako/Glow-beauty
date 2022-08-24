import React from 'react'
import StoryImage from '../images/story-image.png'
import Quote from '../images/quote.png'
import Leaf from '../images/Leaf1.png'

const StorySection = () => {
  return (
    <section className='max-w-6xl mx-auto pb-[9rem] relative'>
        
        <div className='story bg-white max-w-[84%] mx-auto xl:mx-0 pt-5 xl:pt-0' >
        <img src={StoryImage} alt="jane cooper profile" className='xl:absolute top-10 right-4 border-8 border-bg rounded-full w-[370px] mx-auto xl:mx-0'/>
            <div className='text-start max-w-[49rem] p-8 xl:p-[4rem] pb-[5rem]'>
                <img src={Quote} alt='quote' className='max-w-[85px]'/>
                <p className='font-reco text-2xl xl:text-3xl text-blue mt-7'>The UK jewellery awards is an event we always look forward to and we are so honoured to be recognised.</p>
                <p className='font-blue text-2xl font-medium mt-[3rem]'>Jane Cooper</p>
                <p className='text-light-black mt-1'>Napperville, USA</p>
            </div>
        </div>
        <div className='flex gap-2 absolute right-[40%] bottom-[12rem]'>
            <div className='w-[1rem] h-[1rem] border border-orange'></div>
            <div className='w-[1rem] h-[1rem] border border-orange bg-orange'></div>
            <div className='w-[1rem] h-[1rem] border border-orange'></div>
        </div>
        <img src={Leaf} alt='a leaf outline' className='w-[23rem] z-40 absolute bottom-[5rem] right-[-10rem] rotate-[-45deg] scale-[-1]'/>
    </section>
  )
}

export default StorySection