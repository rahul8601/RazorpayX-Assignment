import React from 'react'

import { GoArrowUpRight } from "react-icons/go";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { TbInvoice } from "react-icons/tb";
import { LiaStampSolid } from "react-icons/lia";
import { TbSend } from "react-icons/tb";
import { IoFileTrayOutline } from "react-icons/io5";
import { TbBook2 } from "react-icons/tb";
import Newbutton from '../Newbutton';
import { FaArrowRight } from "react-icons/fa6";



const Section2 = () => {

    const data =[
        {
          icon: <LiaRupeeSignSolid />,
          name: 'Loans',
          new: <Newbutton/>
        },
        {
            VictorPoints: <VictorPoints/>
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
    
  return (
    <div>
    
         <div> 
          {data.map((e) => <div className='flex items-center justify-start gap-[10px] group py-[8px] px-[12px] my-[10px] hover:bg-[#414a50be] hover:border-l-4   hover:border-[#61cea6] hover:rounded cursor-pointer' >
            <span className='text-[#999fad] text-[12px] font-light group-hover:text-white'>{e.icon}</span>
            <p className='text-[#999fad] text-[12px] font-light group-hover:text-white'>{e.name}</p>
            {e.new}
            {e.VictorPoints}
            </div>)}
            
         </div>
    </div>
  )
}

export default Section2;


function VictorPoints() {
    return(
        <>
        <div>
        <div className='flex group'>
        <span className='text-[#999fad] group-hover:text-white text-[12px] font-light relative right-[20px] top-1'><TbInvoice/></span>
        <p className='text-[#999fad] group-hover:text-white text-[12px] font-light relative right-[10px]'>Vendor Payments</p>
        </div>
        <div className='flex items-center'>
            <span>
        <Newbutton/>
        </span>
        <span className='text-[12px] text-blue-500 flex items-center p-1 px-1'>Invoice approvels  <FaArrowRight style={{marginLeft: '5px'}}/></span>
        </div>
        </div>
        
   
        </>
    )
}