import React, { useRef, useLayoutEffect} from 'react'
import ReviewPerson from '../images/person1.png'
import Review from '../images/review.png'
import {gsap} from 'gsap';

const ReviewSection = () => {

  const el = useRef();
  const q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: el.current,
            start: "top bottom",
            end: "bottom 60%",
            scrub: true  
        },
    })

    scrollTimeline.addLabel('start')
        .fromTo(q('.rev-img'), {scale: 0.2, opacity: 0,},{scale:1, opacity: 1},)
        .fromTo(q('.text-anim'), {opacity: 0, y:100,}, {opacity: 1, y:0 }, '')
        
    scrollTimeline.progress(1).progress(0)
})


  return (
    <section className='max-w-[1440px] mx-auto xl:grid xl:grid-cols-9 relative' ref={el}>
        <div className='bg-light-orange xl:col-start-1 xl:col-end-8 py-[6rem] px-8 xl:px-[6rem] pb-11 md:pb-[8rem] flex flex-col items-center relative justify-center xl:items-start'>
            <div className='bg-mid-orange w-[26.5rem] max-w-full h-[37.5rem] rounded-t-full rounded-b-full xl:absolute xl:top-[5rem] xl:right-[-13rem] rev-img'> 
                <img src={ReviewPerson} alt='skin care products' className='block object-cover w-full h-full rounded-t-full rounded-b-full '/>
            </div>
            <div className=' flex flex-col justify-center lg:justify-start xl:text-start mt-5 xl:block'>
                <h2 className='text-blue text-3xl md:text-[4rem] md:font-normal font-reco xl:text-start tracking leading-tight text-anim'>We make going all<br/> natural <span className='text-orange inline'>Beauty </span>.</h2>
                <p className='text-light-black mt-5 mb-4 md:mb-0 text-anim'>Made with nature's best ingredients - our products' transarent <br/> ingredient lists allow you to know.</p>
                <img className="mt-7 w-[35rem] rev-img" src={Review} alt="Reviews: Product users- 7M+ Brand Product- 99+ Product Reviews- 5M"/>
            </div>
        </div>
    </section>
  )
}

export default ReviewSection