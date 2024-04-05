import React from 'react'
import Posts from './Posts'
import Menu from './Menu'
import Suggested from './Suggested'


const Home = () => {
  return (
    <>
    <div className='flex flex-row'>
   <div className='w-[17%]' id="o1">
   <Menu />
   </div>
   <div className='w-[60%]' id='o2'>
    <Posts />
   </div>
   <div className='w-[25%]' id='suggest'>
    <Suggested/>
   </div>


    </div>
    
    
    </>
  )
}

export default Home
