import React, {useState, useEffect} from 'react'
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi"

const Accordion = ({ title, content, index, animationClass, }) => {
    const [isActive, setIsActive] = useState(false);

    useEffect(()=>{
        if(index === 1){
            setIsActive(true)
        }
    }, [index])
  return (
    <div className={`border-t-2 border-[#c9b7b6] py-[2rem] px-2 ${animationClass}`}>
        <h3 
            className={`text-blue text-2xl font-semibold flex items-center justify-between cursor-pointer text-start  `}
            onClick={() => setIsActive(!isActive)}
        >
            {title}  
            <span>{isActive ? <HiOutlineMinus /> : <HiOutlinePlus />}</span> 
        </h3>
        {isActive  && <p className='text-light-black font-medium text-start mt-4'>{content}</p>}
    </div>
  )
}

export default Accordion