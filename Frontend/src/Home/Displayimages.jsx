import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";
import e1 from "../assets/e1.jpg";

const DisplayImages = ({ name, image, user_text }) => {
  const [liked, setLiked] = useState(false);
  const profile_pic = useSelector(state => state.admin_profile.data)
  const profi = `http://localhost:4000/uploads/${profile_pic.user_image}` || " ";
  // console.log(profi);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="max-w-[100%] min-w-[100%] mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl mb-8">
        <div>
        <img
              src={profile_pic.length!=0 ? profi : e1}
              className="w-12 h-12 rounded-[60px] ml-5 mb-3 cursor-pointer inline-block"
              alt="Logo"
            />
          <p className="inline-block ml-4 font-semibold text-base text-[20px]">{name}</p>
        </div>
        <div className="relative">
          <img
            className="w-full h-[450px] object-cover"
            src={`http://localhost:4000/uploads/${image}`}
            alt="Post"
          />
        </div>
        <div className="p-4">
          <div className="flex justify-between">
            <div className="flex flex-row">
              <FaHeart
                className={`h-6 w-6 ${
                  liked ? "text-red-500" : "text-gray-500 "
                }`}
                onClick={toggleLike}
              />
              <FaComment className="h-6 w-6 mx-4 text-gray-500" />
              <FaShare className="h-6 w-6 text-gray-500" />
            </div>
          </div>
          {user_text && (
            <div className="mt-3">
              <p className="inline-block mr-2 text-[16px] font-semibold">{name} :</p>
            <p className="inline-block text-base text-[16px]">
              {user_text}
            </p>

            </div>

          )}
        </div>
      </div>
    </>
  );
};

export default DisplayImages;
