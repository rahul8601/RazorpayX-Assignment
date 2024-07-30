import React from 'react'

import { GoArrowRight } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";
import AccountingPng from '../../../icons/accounting.png'
import { TbBackslash } from "react-icons/tb";

const Card4 = () => {
  return (
    <div className='w-full mt-[18px] h-[68px] bg-[#222831] rounded border-[1px] border-blue-800 flex items-center justify-between relative'>

        <div className='w-[28%] h-[66px] bg-gradient-to-r from-purple-900 via-blue-900 to-[#222831] '>
            <img src={AccountingPng} className='w-[60px]  ml-[16px]'/>
        </div>

    

        <div className='px-[20px] w-[45%]'>
            <div className=' flex '>
             <span className='text-[18px] text-[#61cea6] '><TbBackslash/></span>
            <p className='text-[11px] text-white font-bold'>Automate Bookkeeping For Payouts</p>
            </div>
            <p className='text-[8px] text-[#999fad]'>Close your books 60% faster and with better accuracy by automating Bookkeeping for your Payouts.</p>
        </div>

        
        <div className='w-[28%] pl-[10px]'>
                 <div className='absolute right-[6px] top-[6px] text-[10px] text-[#999fad]'><RxCross1/></div>
                <div className='flex  justify-center text-[9px]  border-[1px] border-blue-800 p-[4px] px-[8px] rounded w-[120px]'>
                <button className=' px-[1px] text-blue-600 '>Connect Zoho Books </button>
                 <span className=' text-blue-600 mt-[1px] ml-[1px]'><GoArrowRight/></span>
                </div>
        </div>
       
      
    </div>
  )
}

export default Card4
