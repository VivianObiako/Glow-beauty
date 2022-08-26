import React, { useRef, useLayoutEffect} from 'react'
import FooterLogos from './FooterLogos'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { linksList } from '../../utils/content';
import FooterLinks from './FooterLinks';
import { FiSend } from "react-icons/fi";
import {gsap} from 'gsap';

const Footer = () => {
  const el = useRef();
  const q = gsap.utils.selector(el); 

  useLayoutEffect(() => {
    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: el.current,
            start: "top bottom",
            end: "bottom bottom",
            scrub: true  
        },
    })

    scrollTimeline.addLabel('start')
        .fromTo(q('.fLogo-anim'), {opacity: 0, x:60,}, {opacity: 1, x:0, stagger:.2 }, '')
        .fromTo(q('.text-anim'), {opacity: 0, y:100,}, {opacity: 1, y:0, stagger:.4 }, '')

    scrollTimeline.progress(1).progress(0)
}) 

  return (
    <section className='max-w-[1440px] mx-auto bg-blue text-text-white/70 font-medium relative' ref={el}>
      <FooterLogos animationClass={'fLogo-anim'}/>
      <div className='max-w-6xl mx-auto  grid grid-cols-1 w-full justify-center gap-[36px] px-6  py-[0rem] mt-[-3rem] md:grid-cols-3 xl:flex xl:justify-between xl:text-start xl:gap-[px]'>
        <div className='identity md:col-span-full md:border md:border-light-blue md:pb-7 md:pt-7 xl:border-none xl:p-0 text-anim'>
          <div className='logo flex items-center justify-center xl:justify-start'>
            <h1 className='font-reco text-4xl text-text-white'>Glow</h1>
            <div className='logo-dot bg-orange ml-1 mt-3'></div>
          </div>
          <p className='mt-8 text-sm font-medium capitalize leading-relaxed'>Keep Up With Our new releases,<br />Beauty tips and what emma's been<br /> up to.</p>
          <div className='social-logos flex justify-center gap-4 text-xl mt-10 xl:justify-start'>
            <a href="/#"><FaFacebookF /></a>
            <a href="/#"><FaInstagram /></a>
            <a href="/#"><FaTwitter /></a>
            <a href="/#" className='text-text-white'><FaLinkedin /></a>
          </div>
        </div>
        {linksList.map((item)=>(
          <FooterLinks linksList={item} key={item.title} animationClass={'text-anim'}/>
        ))}
        <div className='flex flex-col md:col-span-full items-center md:border md:border-light-blue md:p-4 xl:col-span-1 xl:border-none xl:p-0 xl:items-start text-anim'>
          <h4 className='font-bold text-text-white/80 text-medium'>Subscribe</h4>
          <p className='mt-5 text-sm font-medium text-normal'>Get 10% off your first order</p>
          <div className='mt-5 flex rounded-l-full rounded-r-full bg-mid-blue focus-within:border focus-within:border-b-light-blue max-w-[255px]'>
            <input type={'text'} placeholder='Enter your Email' className='mail-input border-none bg-[transparent] rounded-l-full outline-none focus:outline-none focus:border-r-none'/>
            <button className='border-2 border-white bg-orange rounded-full p-3'><FiSend className='text-xl m-auto font-bold'/></button>
          </div>
        </div>
      </div>
      <div className='copyright mx-auto py-[2rem] text-sm border-t border-mid-blue max-w-[500px] text-light-blue mt-[7rem] text-anim'>
        <p>Copyright © 2022 Musemind | All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer