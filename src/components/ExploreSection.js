import React, {useRef, useLayoutEffect} from 'react'
import ProductOne from '../images/explore-01.png'
import ExploreTag from '../images/explore-tag.png'
import ExploreStar from '../images/star.png'
import ExploreVideo from '../images/explore-vid.jpg'
import Leaf from '../images/Leaf1.png'
import {gsap} from 'gsap';

const ExploreSection = ({ index}) => {
    
    const el = useRef();
    const q = gsap.utils.selector(el);

   useLayoutEffect(() => {  
        const timeline = gsap.timeline({defaults:{duration: 1, ease: ""}}); 
        timeline.fromTo(q('.explore-bg'), {  x:100, scale:7, duration: 1.5 }, {  x:0, scale:1, });
        timeline.to(q('.vid-con'), {  y:0, duration: 1 }, '-=.2');
        timeline.to(q('.explore-vid'), {  y:0, width:'16rem', duration: 1 }, '-=1');
        timeline.to(q('.explore-star'), {y:0, width:'9rem', scale:1,}, '-=1');
        timeline.to(q('.leaf'), {y:0}, '-=1');
      }, [index,q]);

    useLayoutEffect(() => {
        
        const scrollTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: el.current,
                start: "top 60%",
                end: "bottom top",
                toggleActions: "restart pause none pause "
            }
        })

        scrollTimeline.addLabel('start')
            .to(q('.img-ex'), {width: '100%',duration: 1})
            .to(q('.exp-tag'), {width: '8.7rem',},'')
            .to(q('.text-anim'), {opacity: 1, y:0, stagger:.4}, '-=1')

        scrollTimeline.progress(1).progress(0)
    })



  return (
    <section className='max-w-[1440px] mx-auto xl:grid xl:grid-cols-9 relative' ref={el}>
        <img src={Leaf} alt='a leaf outline' className='w-[23rem] z-40 absolute top-[0] left-[-4rem] translate-y-[4rem] rotate-45 leaf'/>
        <div className='mr-[-10rem] z-10 xl:hidden'>
        </div>
        <div className='bg-light-purple xl:col-start-4 xl:col-end-10 pt-[13rem] xl px-4 pb-11 md:pb-[8rem] flex flex-col items-center relative justify-center explore-bg' >
            <div className='w-[29rem] max-w-full h-[34.5rem] rounded-t-full xl:absolute xl:top-[5rem] xl:left-[-21.4rem]'>
                <div className='relative h-full w-full'> 
                    <img src={ProductOne} alt='skin care products' className='block object-cover w-0 h-full rounded-t-full mx-auto img-ex'/>
                    <img src={ExploreTag} alt='explore your product tag' className='absolute z-30 block object-cover w-[.5rem]  rounded-t-full top-0 right-[-1rem] exp-tag'/>
                </div>
            </div>
            <div className='mx-auto flex flex-col justify-center mt-5 xl:block '>
                <h2 className='text-blue text-3xl md:text-[2.8rem] md:font-normal font-reco text-start tracking leading-tight opacity-0 translate-y-[5rem] text-anim'>The self care brand that's<br/> setting a new <span className='text-orange inline'>standard <br/>Clean</span> products.</h2>
                <div className='flex flex-col md:flex-row mx-auto text-start mt-7 md:mt-12'>
                    <p className='text-blue font-semibold text-lg mb-4 md:mb-0 md:mr-[3rem] opacity-0 translate-y-[5rem] text-anim'>Where are products <br/>made? <span className='text-light-black block mt-1 text-sm font-normal'>Many brands, especially in period<br /> care, carry products that take <br />centuries.</span></p>
                    <p className='text-blue font-semibold text-lg mb-4 md:mb-0 opacity-0 translate-y-[5rem] text-anim'>Where are products <br/>made? <span className='text-light-black block mt-1 text-sm font-normal'>Many brands, especially in period<br /> care, carry products that take <br />centuries.</span></p>
                </div>
                <div className='xl:absolute top-[-6rem] right-[5rem] mx-auto mt-6 sm:mt-7 xl:mt-0 translate-y-[15rem] vid-con'>
                    <div className='relative'>
                        <img src={ExploreVideo} alt='explore process' className='w-[14rem] h-[9rem] block object-cover border-bg border-4 border-slate-50 xl:w-[4rem] explore-vid'/>
                        <img src={ExploreStar} alt="a star with test saying new" className='w-[7rem] absolute  top-[-2.58rem] xl:top-[-3.55rem] left-0 sm:left-[-3.5rem] rotate-[360] xl:left-[-4.5rem] lg:animate-[spin_4s_linear_infinite] xl:w-[4rem] explore-star'/>
                    </div> 
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default ExploreSection