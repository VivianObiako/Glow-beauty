import React, { useRef, useLayoutEffect} from 'react'
import Logo1 from '../images/framesi.png'
import Logo2 from '../images/barione.png'
import Logo3 from '../images/aloevera.png'
import Logo4 from '../images/calvin.png'
import Logo5 from '../images/vagoda.png'
import {gsap} from 'gsap';


const LogoSection = () => {

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
        .fromTo(q('.logo-anim'), {opacity: 0, x:60,}, {opacity: 1, x:0, stagger:.2 }, '')
}) 


  return (
    <section className='max-w-6xl mx-auto flex flex-wrap gap-6 justify-center xl:justify-between items-center mb-[20rem]' ref={el}>
        <img src={Logo1} alt='framesi logo' className='w-[10rem] logo-anim'/>
        <img src={Logo2} alt='barione logo' className='w-[10rem] logo-anim'/>
        <img src={Logo3} alt='aloevera logo' className='w-[10rem] logo-anim'/>
        <img src={Logo4} alt='calvin logo' className='w-[10rem] logo-anim'/>
        <img src={Logo5} alt='vagoda logo' className='w-[10rem] logo-anim'/>
    </section>
  )
}

export default LogoSection