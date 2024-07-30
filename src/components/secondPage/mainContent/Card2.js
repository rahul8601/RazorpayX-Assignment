import React from 'react'
import { GoArrowRight } from "react-icons/go";
import Bank2 from '../../../icons/bank2.png'


const Card2 = () => {
  return (
    <div className='w-[615px] h-[152px] mt-[10px]'>

        <p className='text-[12px] text-white mb-[3px] font-medium' >Onboarding updates <span className='text-[12px] text-[#999fad]'>(1)</span></p>

        <div className='w-full h-[120px] flex items-center bg-[#222831] rounded'>
            <div className='w-[135px] h-[100%]  rounded-s-lg bg-gradient-to-r from-blue-900'>
                <img src={Bank2} className='h-full w-full p-[16px] '/>
            </div>
            <div className='p-[10px] py-[16px]'> 
                <p className='text-white text-[15px] font-semibold'> Open your RazorpayX account.</p>
                <p className='text-[10px] text-[#727780]'>Don't let bankache come in the way of your growth. Apply for your RazorpayX account with a few basic details </p>

                <div className='flex items-center justify-between pt-[10px] pb-[4px]'>
                 <div className='w-[120px] h-[3px] bg-[#55575c] m-[1px] rounded'>
                    <div className='w-[50%] h-[3px] bg-[#61cea6] rounded'>
                    </div>
                    </div> 
                 <div className='w-[120px] h-[3px] bg-[#55575c] m-[1px] rounded'>
                   
                    </div> 
                 <div className='w-[120px] h-[3px] bg-[#55575c] m-[1px] rounded'>
                   
                    </div> 
                 <div className='w-[120px] h-[3px] bg-[#55575c] m-[1px] rounded'>
                   
                    </div> 
                </div>

                <div className='flex items-center justify-between'>
                <div className='flex items-center text-[12px] bg-blue-500 p-[4px] px-[8px] rounded w-[118px]'>
                <button className=' px-[1px] text-white text-[11px]'>Start application </button>
                 <span className=' text-white ml-[4px]'><GoArrowRight/></span>
                </div>
                <div className='text-[11px] text-[#999fad]'>
                    0/4
                </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Card2
