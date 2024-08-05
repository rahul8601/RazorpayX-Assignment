import React from 'react'

const FrontSideIcon = ({topIcon, setHover, hover}) => {
  return (
    <div className={`w-full h-full   relative ${hover ? 'z-0' : 'z-20' }`}>
        {topIcon.map((item , i) => (
            <div  onMouseEnter={() => setHover(true)} key={i} className={` duration-[0.4s] delay-200 relative z-10 ${hover? "opacity-[0] z-0" : ''}`}>
               <div   className='w-[52px] h-[52px]  rounded  hover:bg-slate-500 duration-100 cursor-pointer bg-slate-700 flex items-center justify-center m-2'>{item.icon}</div>
            </div>
            ))}
    </div>
  )
}

export default FrontSideIcon
