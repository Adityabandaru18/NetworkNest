import React, { useState } from 'react';
import { LuUserPlus } from "react-icons/lu";
import { RiUserSmileLine } from "react-icons/ri";
import e1 from "../assets/e1.jpg";
import {
  Alert,
  AlertIcon,
} from '@chakra-ui/react'

import sound from "../assets/90s-game-ui-7-185100.mp3"
import { useSelector } from 'react-redux';

const SuggestedUsers = ({ name, user_image }) => {
  const profi = `http://localhost:4000/uploads/${user_image}`;
  const [showPlusIcon, setShowPlusIcon] = useState(true);
  const [showAlert, setShowAlert] = useState(false); 
  const profile_pic = useSelector(state => state.admin_profile.data);
  const token = useSelector(state => state.token.text);
  const playToggleSound = () => {
    const audio = new Audio(sound);
    audio.play();
  };

  const handleClick = () => {
    if (token) { 
      setShowPlusIcon(!showPlusIcon);
      handleSmileClick();
      playToggleSound();
    }
  };

  const handleSmileClick = () => {
    setShowAlert(true); 
  };


  const Back = () => {
    setShowAlert(false);
    setShowPlusIcon(!showPlusIcon);
  }
  return (
    <>
      {name && (
        <div className='grid grid-cols-2 items-center mx-auto my-3'>
          <div className='flex items-baseline'>
            <div>
              <img
                src={profi.length==0 ? e1 : profi}
                className="max-w-12 max-h-12 min-h-12 min-w-12 rounded-[60px] ml-5 mb-3 cursor-pointer inline-block"
                alt="Logo"
              />
            </div>
            <div>
              <p className="inline-block ml-3 font-semibold text-base text-[20px]">{name}</p>
            </div>
          </div>
          <div className='text-center relative top-2'>
            {!token && <LuUserPlus className='text-xl absolute right-6 bottom-[0.1px] hover:text-indigo-900' onClick={handleClick} />}
            {token && ( 
              showPlusIcon ? (
                <LuUserPlus className='text-xl absolute right-6 bottom-[0.1px] hover:text-indigo-900' onClick={handleClick} />
              ) : (
                <RiUserSmileLine className='text-xl absolute right-6 bottom-[0.1px] text-green-700 cursor-pointer' onClick={Back} />
              )
            )}
          </div>
        </div>
      )}
      {showAlert && ( 
        <Alert status='success' variant='solid' position='fixed' top="2%" left='50%' transform='translate(-50%, -50%)' zIndex={9999} transition='transform 0.5s ease-in-out'>
          <AlertIcon />
          Friend added to your list! Hurrayyyyy
        </Alert>
      )}
    </>
  );
};

export default SuggestedUsers;
