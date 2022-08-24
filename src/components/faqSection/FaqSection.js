import React from 'react'
import FaqImage from '../../images/faqImage.png'
import { accordionData } from '../../utils/content'
import Accordion from './Accordion'
import Leaf from '../../images/Leaf1.png'


const FaqSection = () => {

  return (
    <section className='max-w-6xl mx-auto flex flex-col xl:flex-row py-[9rem] px-6 relative'>
        <img src={Leaf} alt='a leaf outline' className='w-[20rem] z-40 absolute top-[-1rem] right-[-6rem] rotate-[25deg] scale-[-1]'/>
        <img src={FaqImage} alt="skincare product opened" className='block rounded-t-full object-cover w-[29rem] max-w-full h-[34.5rem] mx-auto'/>
        <div className='mt-[3rem] xl:mt-0 xl:ml-[6rem] mx-auto max-w-full'>
            <h2 className='font-reco text-blue text-4xl lg:text-6xl xl:text-start'>You have <span className='text-orange'>questions,</span><br /> we have answers.</h2>
            <div className='mt-9 border-b-2 border-[#c9b7b6] mx-auto w-[30rem] max-w-full'>
            {accordionData.map((item, index) => (
                <Accordion title={item.title} content={item.content} key={`${item.title}${item.index}`} index={index + 1} />
            ))}
            </div>
        </div>
    </section>
  )
}

export default FaqSection