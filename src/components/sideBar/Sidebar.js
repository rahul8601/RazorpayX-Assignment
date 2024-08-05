import React, { useState } from 'react'

import { FiHome } from "react-icons/fi";
import { GoArrowUpRight } from "react-icons/go";
import { FiFileText } from "react-icons/fi";
import { LuUser } from "react-icons/lu";

import { LiaRupeeSignSolid } from "react-icons/lia";
import Newbutton from '../Newbutton';
import { LiaStampSolid } from "react-icons/lia";
import { TbSend } from "react-icons/tb";
import { IoFileTrayOutline } from "react-icons/io5";
import { TbBook2 } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa6";
import { TbInvoice } from "react-icons/tb";
import FrontSideIcon from './FrontSideIcon';
import SideBackMenu from './SideBackMenu';





const Sidebar = () => {
  
  
  const [hover , setHover] = useState(false)
  const [active, setActive] = useState(0)
  

  
  const data =[
    {
      icon: <FiHome />,
      name: 'Home',
   
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
   
    {
      icon: <LiaRupeeSignSolid />,
      name: 'Loans',
      new: <Newbutton/>
    },
   
    {
        victorPoints: <VictorPoints active={active} />
    },
    {
      icon: <LiaStampSolid/>,
      name: 'Tax Payments'
    },
    {
      icon: <TbSend/>,
      name: 'Payout Links'
    },
    {
      icon: <IoFileTrayOutline/>,
      name: 'Payroll'
    },
  
    {
      icon: <TbBook2/>,
      name: 'Reports'
    },
  ]
  
 const topIcon = data.slice(0,5)
  return (
    <div className='w-[100%]  h-screen relative '>

        <div  onMouseLeave={() => setHover(false)} className={`overflow-hidden pt-[16px] w-[70px]  ${hover? "hover:w-[228px] " : ""}  duration-[0.4s] delay-200 bg-[#171D26] absolute h-screen `}>

          <FrontSideIcon topIcon={topIcon} setHover={setHover} hover={hover}/>
          <SideBackMenu hover={hover} data={data} setActive={setActive} active={active}/>

        </div>
      
    </div>
  )
}

export default Sidebar



 function VictorPoints({active}) {
    return(
    <div className='flex items-start group'>
             <span className={` ${active === 5 ? 'text-white' : '' }text-[#999fad] group-hover:text-white text-[12px] pb-[24px] font-light relative left-[-17px] top-[4px]`}><TbInvoice/></span>
        <div className={`${active === 5 ? 'text-white': ''} text-[#999fad] group-hover:text-white text-[12px] font-light relative ]`}>
            <span>Vendor Payments</span>
        <div className='flex items-center '>   
        <Newbutton/>
        <span className='text-[12px] text-blue-500 flex items-center p-1 px-1 overflow-hidden'>Invoice approvels  <FaArrowRight style={{marginLeft: '5px'}}/></span>
        </div>
        </div>
    </div>
    )
}

