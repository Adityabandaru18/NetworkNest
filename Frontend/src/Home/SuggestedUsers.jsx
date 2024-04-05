import React from 'react'
import { LuUserPlus } from "react-icons/lu";

const SuggestedUsers = ({ name, user_image }) => {
    const profi = `http://localhost:4000/uploads/${user_image}` || " ";

    return (
        <>
        <div className='grid grid-cols-4 gap-6 items-center mx-auto'>
            <div></div>
  <div className='flex items-center'>
    <img
      src={profi}
      className="w-12 h-12 rounded-[60px] ml-5 mb-3 cursor-pointer inline-block"
      alt="Logo"
    />
    <p className="inline-block ml-4 font-semibold text-base text-[20px]">{name}</p>
  </div>
  <div></div>

  <div className='text-center'>
    <LuUserPlus className='text-xl' />
  </div>
</div>

        </>

    )
}

export default SuggestedUsers
