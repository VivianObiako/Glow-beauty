import React from 'react'
import ProductOne from '../images/explore-01.png'
import ExploreTag from '../images/explore-tag.png'
import ExploreStar from '../images/star.png'
import ExploreVideo from '../images/explore-vid.jpg'
import Leaf from '../images/Leaf1.png'

const ExploreSection = () => {
  return (
    <section className=' xl:grid xl:grid-cols-9 relative'>
        <img src={Leaf} alt='a leaf outline' className='w-[23rem] z-40 absolute top-[0] left-[-4rem] rotate-45'/>
        <div className='mr-[-10rem] z-10 xl:hidden'>
        </div>
        <div className='bg-light-purple xl:col-start-4 xl:col-end-10 pt-[13rem] xl px-4 pb-11 md:pb-[8rem] flex flex-col items-center relative justify-center' >
            <div className='w-[29rem] max-w-full h-[34.5rem] rounded-t-full xl:absolute xl:top-[5rem] xl:left-[-21.4rem]'>
                <div className='relative h-full w-full'> 
                    <img src={ProductOne} alt='skin care products' className='block object-cover w-full h-full rounded-t-full'/>
                    <img src={ExploreTag} alt='explore your product tag' className='absolute z-30 block object-cover w-[8.7rem]  rounded-t-full top-0 right-[-1rem]'/>
                </div>
            </div>
            <div className='mx-auto flex flex-col justify-center mt-5 xl:block'>
                <h2 className='text-blue text-3xl md:text-[2.8rem] md:font-normal font-reco text-start tracking leading-tight'>The self care brand that's<br/> setting a new <span className='text-orange inline'>standard <br/>Clean</span> products.</h2>
                <div className='flex flex-col md:flex-row mx-auto text-start mt-7 md:mt-12'>
                    <p className='text-blue font-semibold text-lg mb-4 md:mb-0 md:mr-[3rem]'>Where are products <br/>made? <span className='text-light-black block mt-1 text-sm font-normal'>Many brands, especially in period<br /> care, carry products that take <br />centuries.</span></p>
                    <p className='text-blue font-semibold text-lg mb-4 md:mb-0 '>Where are products <br/>made? <span className='text-light-black block mt-1 text-sm font-normal'>Many brands, especially in period<br /> care, carry products that take <br />centuries.</span></p>
                </div>
                <div className='xl:absolute top-[-6rem] right-[5rem] mx-auto mt-6 sm:mt-7 xl:mt-0'>
                    <div className='relative'>
                        <img src={ExploreVideo} alt='explore process' className='w-[14rem] xl:w-[16rem] h-[9rem] block object-cover border-bg border-4 border-slate-50'/>
                        <img src={ExploreStar} alt="a star with test saying new" className='w-[7rem] xl:w-[9rem] absolute  top-[-2.58rem] xl:top-[-3.55rem] left-0 sm:left-[-3.5rem] xl:left-[-4.5rem]'/>
                    </div> 
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ExploreSection