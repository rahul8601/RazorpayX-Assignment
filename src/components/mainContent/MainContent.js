import React from 'react'


import HeadSection1 from './HeadSection1';
import ItemSection2 from './ItemSection2';
import Head from './Head';


const MainContent = () => {
   
  return (
    <div className='w-full bg-[#090f13f6] h-screen '>
      <div className='w-[39rem] h-screen m-auto flex flex-col'>
         <Head/>
         <HeadSection1/>
         <ItemSection2/>
      </div>
              
    </div>
  )
}

export default MainContent
