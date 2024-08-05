import React from 'react'
import { useNavigate } from 'react-router-dom'

const SideBackMenu = ({data, setActive, hover, active}) => {
    const navigate = useNavigate()

    const handleClick = (item, i) =>{
        setActive(i)
        navigate(`/${item.name}`)
      }

      
  return (
    <div>
        <div   className={`duration-300 overflow-hidden delay-200 absolute h-screen w-[228px]  top-0 z-0 ${hover? 'z-10  ' : 'opacity-0 delay-100'} `}>
          <img onClick={() => {
            navigate(`/Home`)
            setActive(0)
          }} src={"https://razorpay-copy.netlify.app/assets/razorpayX-07d036c8.svg"} className='w-58 px-[12px] py-[14px] cursor-pointer ' />
             
              {data.map((item, i) =>(
             <div key={i} className='relative group/border '>
              <div className={`${active === i ? ' bg-[#61cea6] ' : '' }  group-hover/border:bg-[#61cea6]   w-[4px] h-[65%] top-[18%]  rounded-r-lg absolute  left-0`}>
              </div>
              
              <div onClick={()=> handleClick(item, i)} key={i} className={`flex duration-100 group/item  items-center justify-start gap-[10px] py-[8px] px-[12px] my-[12px]  ${active === i ? 'bg-[#414a50be]  text-White   rounded cursor-pointer ' : 'hover:bg-[#414a50be]  hover:rounded    cursor-pointer ' } `}>
                  <div className={`  text-[12px] font-light  group-hover/item:text-white ${active === i ? 'text-white' : 'text-[#999fad]'}`}>{item.icon}</div>
                  <div className={` text-[12px] font-light flex items-center gap-[6px]  group-hover/item:text-white ${active === i? 'text-white' : 'text-[#999fad]'}` }>{item.name} <span>{item.new}</span> {item.victorPoints}
                  </div>    
              </div>
              </div>
              ))}
          </div>
    </div>
  )
}

export default SideBackMenu
