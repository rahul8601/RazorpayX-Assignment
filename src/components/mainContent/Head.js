import React from 'react'
import { FaArrowRight } from "react-icons/fa6";

const Head = () => {

  return (
    <div className='flex justify-between py-1'>
          <p className='text-white text-[12px]'>Insights</p>
          <p className='text-blue-500 text-[12px] flex items-center'>  Detailed insights <span> <FaArrowRight style={{marginLeft: '5px'}}/></span></p>
        </div>
  )
}

export default Head
