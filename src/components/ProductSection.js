import React, { useRef, useLayoutEffect} from 'react'
import Product1 from '../images/product1.png'
import Product2 from '../images/product2.png'
import Product3 from '../images/product3.png'
import Product4 from '../images/product4.png'
import Product5 from '../images/product5.png'
import {gsap} from 'gsap';


const products = [
  { name: 'Shower Butter', image: Product1, },
  { name: 'Luxury Oil Gel', image: Product2},
  { name: 'Body Oil', image: Product3,},
  { name: 'Sunrise Shampoo',  image: Product4,},
  { name: 'Luxury Oil Gel',  image: Product5,},
]

const ProductSection = () => {

  const el = useRef();
  const q = gsap.utils.selector(el);

  useLayoutEffect(() => {
    const scrollTimeline = gsap.timeline({
        scrollTrigger: {
            trigger: el.current,
            pin: true,
            start: "top top",
            end: "bottom top",
            scrub: true  
        },
    })

    scrollTimeline.addLabel('start')
        .fromTo(q('.text-anim'), {opacity: 0, y:-5,}, {opacity: 1, y:0, stagger: .1},)
        .fromTo(q('.product'), {opacity: 0, x:60,}, {opacity: 1, x:0, }, '')

    scrollTimeline.progress(1).progress(0)
})

  return (
    <section className='max-w-6xl mx-auto flex flex-col lg:grid lg:grid-cols-3 gap-6 lg:gap-4 px-4 xl:px-0 py-[8rem]' ref={el}>
      <div className='lg:text-start'>
        <h2 className='font-reco text-blue text-6xl tracking leading-snug text-anim'>Trending On <span className='text-orange '>Essentials</span></h2>
        <p className='text-light-black mt-6 text-anim'>Made with nature's best ingredients - our <br />products' transarent ingredient. Fear of<br /> God Essentials.</p>
        <button
                type="button"
                className=" mx-auto lg:mx-0 bg-transparent border border-orange px-7 py-4  mt-7 relative font-semibold rounded-full text-orange flex hover:bg-orange hover:text-text-white hover:transition hover:duration-500 hover:delay-200 hover:ease-in-out text-anim"
                >
                <span>Browse All Products </span>
                <span className='ml-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                </span>
                
          </button>
      </div>
      {products.map((item, i) => (
          <div key={`${item.name}${i}`} className='product'>
            <img src={item.image} alt={`${item.name}`}/>
            <p className='text-blue text-2xl font-reco mt-5'>{`${item.name}`}</p>
            <p className='text-light-black mt-2'>$190.99</p>
          </div>
        ))}
    </section>
  )
}

export default ProductSection