import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { TbSearch } from "react-icons/tb";
import { BiUserVoice } from "react-icons/bi";
import { FiUserCheck } from "react-icons/fi";

const Head2 = () => {
  return (
    <div className='w-full h-[50px] justify-end flex'>
         <div className='flex items-center  gap-[10px] px-[26px]'>
          <div className='flex items-center text-[11px] bg-blue-500 py-[6px] px-[4px] '>
            <button className='border-r-[1px] border-slate-600 px-[7px] text-white'>+ PAYOUT</button>
            <span className='px-[7px] text-white'><IoIosArrowDown/></span>
          </div>

          <span className='text-blue-500'><TbSearch/></span>
          <span className='text-amber-800 text-[24px]'><BiUserVoice/></span>
          <span className='text-blue-500'><FiUserCheck/></span>
         </div>
    </div>
  )
}

export default Head2
