import React from 'react'
import { FaCheck } from "react-icons/fa6";
const Card3 = () => {
  return (
    <div className='w-full mt-[8px]'>
    


       <div className='border-t-[2px] border-green-700  flex items-start p-[10px] h-[100px] bg-[#222831]'>
         <div className='px-[10px]  w-[180px]'>
         <p className='text-white text-[15px]'>Amazon Instant</p>
         <p className='text-white text-[15px]'>Settlements</p>
         </div>

          

         <div className='flex items-start gap-3'>
          <div className='w-[16px] h-[16px] bg-blue-500 rounded-full border-[4px] border-sky-800 mt-1'>
          </div>

          <div>
          <div>
            <p className='text-[11px] text-[#999fad]'>Let's get your started</p>
            <p className='text-[11px] text-[#999fad]'> Complete your application and get instant access to your Amazon payouts</p>
          </div>
          <button className='px-[9px] py-[6px] text-white  bg-blue-500 text-[10px] mt-[4px]'>APPLY NOW</button>

          </div>


         </div>
       </div>




       <div className='border-t-[2px] border-green-700  flex items-start py-[7px] px-[10px] h-[100px] bg-[#222831]'>
         <div className='px-[10px] w-[180px]'>
            <p className='text-white text-[15px]'>Creating payouts</p>
            <p className='text-white text-[15px]'>in Live mode</p>
         </div>

          

         <div className='flex items-start  flex-col'>

            <div className='flex items-center'>
            <div className='w-[16px] h-[16px] bg-[#50586a] rounded-full flex items-center justify-center '>
                <div className="text-[8px] text-blue-500"><FaCheck/></div>
            </div>

            <div className=' w-[360px] border-b-[1px] border-[#43464d] ml-[10px]'>
                <span className='text-[12px] text-[#abb0bb] font-bold '>
                    Add balance
                </span>
                <span className='text-[11px] text-[#6e727c]'> to create payouts in Live mode 
                </span>
            </div>

            </div>

         <div className='flex items-start'>
          <div className='w-[16px] h-[16px] bg-blue-500 rounded-full border-[4px] border-sky-800 mt-1'>
          </div>

          <div className='ml-[10px]'>
          <div>
            <p className='text-[11px] text-white font-bold '>Create payout</p>
            <p className='text-[11px] text-[#71757e]'>There are multiple ways in which you can create the first payout:</p>
          </div>
          <div >
          <button className='py-[5px] px-[8px] text-white  bg-blue-500 text-[8px] m-[2px]'>MAKE A PAYOUT</button>
          <button className='py-[5px] px-[8px] text-white  bg-[#334249] text-[8px] m-[2px]'>SHOW APPS FOR ME</button>
          <button className='py-[5px] px-[8px] text-white  bg-[#334249]  text-[8px] m-[2px]'>API PAYOUTS</button>
          </div>
          </div>



         </div>
         </div>
       </div>
      
    </div>
  )
}

export default Card3
