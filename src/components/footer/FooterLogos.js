import React from 'react'
import FooterLogo1 from '../../images/footer-1.png'
import FooterLogo2 from '../../images/footer-2.png'
import FooterLogo3 from '../../images/footer-3.png'
import FooterLogo4 from '../../images/footer4.png'

const FooterLogos = ({animationClass}) => {
  return (
    <div className='max-w-6xl mx-auto px-4 xl:px-0 text-center relative top-[-11rem]'>
        <div className='mx-auto flex gap-4 flex-wrap sm:flex-nowrap justify-center'>
            <div className=''><img src={FooterLogo1} alt='hands applying lotion' className={`w-[17rem] h-[16rem] ${animationClass}`}/></div>
            <div className=''><img src={FooterLogo2} alt='hand holding product' className={`w-[17rem] h-[16rem] ${animationClass}`}/></div>
            <div className=''><img src={FooterLogo3} alt='product with some ingredients' className={`w-[17rem] h-[16rem] ${animationClass}`}/></div>
            <div className=''><img src={FooterLogo4} alt='instageam logo' className={`w-[17rem] h-[16rem] ${animationClass}`}/></div>
        </div>
    </div>
  )
}

export default FooterLogos