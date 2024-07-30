import React from 'react'
import Head2 from './Head2'
import Card1 from './Card1'
import Card2 from './Card2'
import Card3 from './Card3'
import Card4 from './Card4'


const MainContent2 = () => {
  return (
    <div className='w-full h-screen bg-[#090f13f6] overflow-hidden'>
        <Head2/>
       <div className='w-[39rem]  m-auto flex flex-col  justify-between '>
        <Card1/>
        <Card2/>
        <Card3/>
        <Card4/>
        </div>
    </div>
  )
}

export default MainContent2
