import React from 'react'


const Wrapper = ({children}) => {
  return (
    <div className='flex flex-row h-screen' >
    {children}
    </div>
  )
}

export default Wrapper
