import React from 'react'
import { LiaRupeeSignSolid } from "react-icons/lia";

const HeadSection1 = () => {
  return (
    <div className='w-full h-[8rem] bg-[#222831] border-b-[6px] border-[#1A3636] relative rounded mb-4'>
    <div className='p-4'>
      <p className=' text-[11px] text-[#999fad]'>Payout valume - last 30 days</p>
       <p className='flex place-items-baseline '>
        <span className='text-[11px] text-[#999fad] font-medium relative top-[2px]'><LiaRupeeSignSolid/></span>
        <span className='text-white text-[14px] font-medium '>236,695</span>
        <span className='text-[11px] text-[#999fad] font-medium'>.00</span>
        </p>
    </div>
    <div className='w-full border-b-2 border-blue-600	 absolute bottom-0'>
    </div>
  </div>
  )
}

export default HeadSection1
