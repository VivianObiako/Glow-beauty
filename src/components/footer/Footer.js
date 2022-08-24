import React from 'react'
import FooterLogos from './FooterLogos'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { linksList } from '../../utils/content';
import FooterLinks from './FooterLinks';
import { FiSend } from "react-icons/fi";

const Footer = () => {
  return (
    <section className='max-w-[1440px] mx-auto bg-blue text-text-white/70 font-medium relative'>
      <FooterLogos/>
      <div className='max-w-6xl mx-auto  grid grid-cols-1 w-full justify-center gap-[36px] px-6  py-[0rem] mt-[-3rem] md:grid-cols-3 xl:flex xl:justify-between xl:text-start xl:gap-[px]'>
        <div className='identity md:col-span-full md:border md:border-light-blue md:pb-7 md:pt-7 xl:border-none xl:p-0'>
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
          <FooterLinks linksList={item} key={item.title}/>
        ))}
        <div className='flex flex-col md:col-span-full items-center md:border md:border-light-blue md:p-4 xl:col-span-1 xl:border-none xl:p-0 xl:items-start'>
          <h4 className='font-bold text-text-white/80 text-medium'>Subscribe</h4>
          <p className='mt-5 text-sm font-medium text-normal'>Get 10% off your first order</p>
          <div className='mt-5 flex rounded-l-full rounded-r-full bg-mid-blue focus-within:border focus-within:border-b-light-blue max-w-[255px]'>
            <input type={'text'} placeholder='Enter your Email' className='mail-input border-none bg-[transparent] rounded-l-full outline-none focus:outline-none focus:border-r-none'/>
            <button className='border-2 border-white bg-orange rounded-full p-3'><FiSend className='text-xl m-auto font-bold'/></button>
          </div>
        </div>
      </div>
      <div className='copyright mx-auto py-[2rem] text-sm border-t border-mid-blue max-w-[500px] text-light-blue mt-[7rem]'>
        <p>Copyright © 2022 Musemind | All rights reserved</p>
      </div>
    </section>
  )
}

export default Footer