import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='grid grid-cols-[218px_1fr] h-screen  bg-[#0A0F13]'>
       {children}
    </div>
  )
}

export default Wrapper
