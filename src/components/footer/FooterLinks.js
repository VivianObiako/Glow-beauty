import React from 'react'

const FooterLinks = ({linksList, animationClass}) => {
  return (
    <div className={`flex flex-col ${animationClass}`}>
          <h4 className='font-bold text-text-white/80 text-medium'>{linksList.title}</h4>
          {linksList.links.map((item, index)=>(
            <a href={item.href} className='pt-5 text-normal' key={item.name}>{item.name}</a>
          ))}
    </div>
  )
}

export default FooterLinks