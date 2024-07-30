import React from 'react'

import { FiHome } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import Section1Items from './Section1Items';

const Section1 = () => {

    

    const data =[
        {
          icon: <FiHome />,
          name: 'Home',
          active: true
        },
        {
          icon: <GoArrowUpRight/>,
          name: 'Payouts'
        },
        {
          icon: <FiFileText />,
          name: 'Account Statement'

        },
        {
          icon: <LuUser/>,
          name: 'Contects'
        },
      ]
    
  return (
    <div>
       <div className="h-[40px] my-[10px]flex items-center">
          
         <img src={"https://razorpay-copy.netlify.app/assets/razorpayX-07d036c8.svg"} className='w-36 px-[12px] py-[14px] ' />
         </div>
         <div className='pt-[10px]'> 
          {data.map((e, i) => <Section1Items item={e} key={i}/>)}
         </div>

        <div className=' w-full h-[1px] bg-[#50586a]'>
            
        </div>
         
    </div>
  )
}

export default Section1
