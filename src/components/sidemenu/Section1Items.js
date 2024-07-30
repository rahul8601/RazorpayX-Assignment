import React from 'react'

const Section1Items = ({item}) => {
  return (
    <>
      
    <div className={`flex  items-center justify-start gap-[10px] py-[8px] px-[12px] my-[12px]  ${item.active ? 'bg-[#414a50be] group border-l-4 text-White border-[#61cea6]  rounded cursor-pointer ' : 'hover:bg-[#414a50be] hover:border-l-4 hover:rounded group  hover:border-[#61cea6] cursor-pointer ' } `}  >
            <span className={` text-[12px] font-light group-hover:text-white ${item.active? 'text-white' : 'text-[#999fad]'}`}>{item.icon}</span>
   <p className={` text-[12px] font-light  group-hover:text-white ${item.active? 'text-white' : 'text-[#999fad]'}` }>{item.name}</p>
 
   </div>
   </>
  )
}

export default Section1Items
