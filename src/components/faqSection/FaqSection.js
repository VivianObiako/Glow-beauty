import React, { useRef, useLayoutEffect} from 'react'
import FaqImage from '../../images/faqImage.png'
import { accordionData } from '../../utils/content'
import Accordion from './Accordion'
import Leaf from '../../images/Leaf1.png'
import {gsap} from 'gsap';


const FaqSection = () => {

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
        .fromTo(q('.faq-img'), {scale: 0.2, opacity: 0,},{scale:1, opacity: 1},)
        .fromTo(q('.text-anim'), {opacity: 0, y:20, x:60,}, {opacity: 1, y:0, x:0, stagger:.2 }, '')
})

  return (
    <section className='max-w-[1440px] mx-auto  relative px-6' ref={el}>
        
        <div className='max-w-6xl flex flex-col xl:flex-row py-[9rem] mx-auto xl:justify-between'>
            <img src={Leaf} alt='a leaf outline' className='w-[23rem] z-40 absolute top-[-1rem] right-[-5rem] rotate-[25deg] scale-[-1] text-anim'/>
            <img src={FaqImage} alt="skincare product opened" className='block rounded-t-full object-cover w-[29rem] max-w-full h-[34.5rem] mx-auto xl:mx-0 faq-img'/>
            <div className='mt-[3rem] xl:mt-0 xl:ml-[6rem] mx-auto max-w-full'>
                <h2 className='font-reco text-blue text-4xl lg:text-6xl xl:text-start text-anim'>You have <span className='text-orange'>questions,</span><br /> we have answers.</h2>
                <div className='mt-9 last:border-b-2 border-[#c9b7b6] mx-auto w-[30rem] max-w-full'>
                {accordionData.map((item, index) => (
                    <Accordion title={item.title} content={item.content} key={`${item.title}${index}`} index={index + 1} animationClass='text-anim' />
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FaqSection