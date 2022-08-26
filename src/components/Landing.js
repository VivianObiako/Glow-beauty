import React, {useEffect, useRef} from 'react'
import {gsap} from 'gsap';

const Landing = () => {
    const logoText = useRef()
    const dot = useRef()
    const logo = useRef()
    

    useEffect(()=>{
        const tl = gsap.timeline({defaults:{duration: 1, ease: ""}});
        tl.fromTo(dot.current, {right: '100%', scale: 5,}, {scale: 7})
        tl.fromTo(dot.current, {right: '100%', scale: 4, scaleX:7,}, {right:0, scale: 4, ease: 'Bounce.easeOut'})
        tl.to(dot.current, {right: 0, scale: 1 })
        tl.to(logoText.current,{ opacity: 1,  })
        tl.to(logo.current, { bottom: '60%', right: '60%', scale:.5, opacity:0, duration: 2, ease: ''})

        tl.progress(1).progress(0)
    }, [])
  return (
    <div className='bg-light-purple flex items-center justify-center w-full h-[100vh] m-0'>
        <div className="logo flex items-center relative" ref={logo}>
            <h1 className='logo-text font-reco text-6xl text-blue opacity-0' ref={logoText}>Glow</h1>
            <div className='landing-dot bg-orange ml-1 mt-3 w-[1rem] relative' ref={dot}></div>
        </div>
    </div>
  )
}

export default Landing