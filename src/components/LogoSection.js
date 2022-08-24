import React from 'react'
import Logo1 from '../images/framesi.png'
import Logo2 from '../images/barione.png'
import Logo3 from '../images/aloevera.png'
import Logo4 from '../images/calvin.png'
import Logo5 from '../images/vagoda.png'


const LogoSection = () => {
  return (
    <section className='max-w-6xl mx-auto flex flex-wrap gap-6 justify-center xl:justify-between items-center mb-[20rem]'>
        <img src={Logo1} alt='framesi logo' className='w-[10rem]'/>
        <img src={Logo2} alt='barione logo' className='w-[10rem]'/>
        <img src={Logo3} alt='aloevera logo' className='w-[10rem]'/>
        <img src={Logo4} alt='calvin logo' className='w-[10rem]'/>
        <img src={Logo5} alt='vagoda logo' className='w-[10rem]'/>
    </section>
  )
}

export default LogoSection