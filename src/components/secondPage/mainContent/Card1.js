import React from 'react'
import { BsArrowRepeat } from "react-icons/bs";
import { LiaRupeeSignSolid } from "react-icons/lia";

const Card1 = () => {
  return (
    <div className='w-full h-[120px] mb-[5px]'>

    <div className='flex items-center'>
    <div className='  w-[20px] h-[10px] m-1 p-[2px]'><img src='https://d6xcmfyh68wv8.cloudfront.net/assets/x/payroll/logos/x-logo.svg'/></div>
    <div className='flex items-center relative top-[4px]'><span className='text-[11px] text-[#999fad]'>RazorpayX Lite</span> <span className='text-[10px] px-[5px] text-[#878a91] '>as of a few second ago </span> <span className='text-[12px] text-[#999fad]'><BsArrowRepeat/></span></div>
    </div>

    <div className='flex items-center h-[40px] '>
       <div className=' flex items-center  w-[240px] varela-round-regular'>
        <div className='text-[13px] text-[#999fad] relative top-[1px]'><LiaRupeeSignSolid/></div>
        <span  className='text-white text-[20px]  '>100</span>
        <span className='text-[11px] text-[#999fad] relative top-[2px] font-semibold'>.09</span>

       </div>
       
       <div>
          <div className='text-blue-500 text-[11px] border-l-[1px] px-[20px] h-[25px] border-[#343438] flex items-center'>+ Add balance</div>
       </div>


    </div>

    <div className='w-full h-[40px] border-[1px] border-dashed flex items-center px-[14px] border-[#4c4e52] my-[20px]'>
        <p  className='text-[#70737a]'>🎉<span className='text-[12px]'>You're all caught up.</span> <span className='text-[11px]'>There are no more items pending on you.</span></p>
    </div>
        
    </div>
  )
}

export default Card1
