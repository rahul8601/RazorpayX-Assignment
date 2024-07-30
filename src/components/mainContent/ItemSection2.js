import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { RiErrorWarningLine } from "react-icons/ri";
import { MdOutlineArrowDownward } from "react-icons/md";
import { LuUser } from "react-icons/lu";
import { LiaRupeeSignSolid } from "react-icons/lia";

const ItemSection2 = () => {
  return (
    <div className='w-full bg-[#222831]  h-screen rounded mb-[5px] px-4'>
    <div className='flex justify-between py-4 '>
      <p className='text-white text-[12px] flex gap-2 font-medium'>Acitivity Feed <span className='flex items-center text-[11px] text-[#999fad] font-medium '> <span className='pr-1'><RiErrorWarningLine/></span> updataed a few seconds ago</span></p>
      <p className='text-blue-400	 text-[12px] flex items-center font-medium'>  Show filters <span> <IoIosArrowDown style={{marginLeft: '5px'}}/></span></p>
    </div> 
      <div className='flex flex-col items-center'>


      <div className='w-[30rem]  h-[22rem] m-auto mt-[30px] flex flex-col justify-between'>
        
        <div className='w-full h-[76px]  flex items-center gap-8 bg-gradient-to-r from-[#393e462c] to-[#22283100]' >
         <div className=' border-r-[1px] text-[11px] ml-[18px] border-[#999fad] w-[116px] flex items-center flex-col'>
            <p  className='text-[11px] font-medium text-white'>23 JUL</p>
            <p className='text-[11px] text-[#999fad]'>Tuesday</p>
         </div>
         <div className='flex items-center text-white w-[150px]'>
             <span className='bg-[#243447] text-[11px] m-2 p-[2px]'><LuUser/></span>
             <p className='text-[#999fad] text-[11px] '><span className='text-white mls-1 '>1</span> contect created</p>
         </div>
        </div>
        
        <div className='w-full h-[76px]  flex items-center gap-8 bg-gradient-to-r from-[#393e462c] to-[#22283100]' >
         <div className=' border-r-[1px] text-[11px] ml-[18px] border-[#999fad] w-[116px] flex items-center flex-col'>
            <p  className='text-[11px] font-medium text-white '>9 JUL</p>
            <p className='text-[11px] text-[#999fad]'>Tuesday</p>
         </div>
         <div className='flex items-center flex-end text-white w-[220px]'>
             <span className='  w-[25px] h-[25px] m-1 p-[2px]'><img src='https://d6xcmfyh68wv8.cloudfront.net/assets/x/payroll/logos/x-logo.svg'/></span>
             <p className='text-[#999fad] text-[11px] flex items-end'><span className='pb-[5px]'><LiaRupeeSignSolid/></span><span className='text-white text-[13px] pb-[1px] relative top-[1px] varela-round-regular'>300</span> <span className='pb-[1px] varela-round-regular'>00 credited into the account</span></p>
         </div>
        </div>

        <div className='w-full h-[76px]  flex  flex-end items-center gap-8 bg-gradient-to-r from-[#393e462c] to-[#22283100]' >
         <div className=' border-r-[1px] text-[11px] ml-[18px] border-[#999fad] w-[116px] flex items-center flex-col'>
            <p  className='text-[11px] font-medium text-white'>1 JUL</p>
            <p className='text-[11px] text-[#999fad]'>Monday</p>
         </div>
         <div className='flex items-center text-white w-[250px]'>
             <span className=' w-[25px] h-[25px] m-1 p-[2px]'><img src='https://d6xcmfyh68wv8.cloudfront.net/assets/x/payroll/logos/x-logo.svg'/></span>
             <p className='text-[#999fad] flex items-center justify-center'><span className='text-white text-[13px] mr-[2px] relative top-[1px]'>1</span> <span className='text-[11px] pt-[4px]'>payout worth </span><span className='text-[11px] pt-[6px] relative top-[-1px]'><LiaRupeeSignSolid/></span> <span className='text-[13px] text-white relative top-[2px] varela-round-regular'>2,36695</span><span className='text-[11px] pt-[6px] varela-round-regular'>.00 created</span></p>
         </div>
        </div>

        <div className='w-full h-[76px]  flex items-center gap-8 bg-gradient-to-r from-[#393e462c] to-[#22283100]' >
         <div className=' border-r-[1px] text-[11px] ml-[18px] border-[#999fad] w-[116px] flex items-center flex-col'>
            <p  className='text-[11px] font-medium text-white'>24 JUN</p>
            <p className='text-[11px] text-[#999fad]'>Monday</p>
         </div>
         <div className='flex items-center text-white w-[150px]'>
         <span className=' w-[25px] h-[25px] m-1 p-[2px]'><img src='https://d6xcmfyh68wv8.cloudfront.net/assets/x/payroll/logos/x-logo.svg'/></span>
           
         </div>
        </div>

      </div>

      <button className='flex items-center justify-center text-white text-[10px] p-[8px] mt-4 bg-[#414a50be] '>LOOK FOR OLDER ACTIIVITYS <span className='p-[2px]'><MdOutlineArrowDownward/></span></button>

      </div>
    </div>
  )
}

export default ItemSection2
