import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { MdEditNote } from "react-icons/md";
import { RiEdit2Line } from "react-icons/ri";
import { MdDeleteOutline } from "react-icons/md";
import { Deletepost } from "../redux/slices/ShowpostsAPI";
const DisplayImages = ({ name, image, user_text, user_image, token }) => {
  const [liked, setLiked] = useState(false);
  const token1 = useSelector((state) => state.token.text);
  const login = useSelector((state) => state.Login.text);
  const [show, setshow] = useState(false);
  const dispatch = useDispatch();


  const profi = `http://localhost:4000/uploads/${user_image}`;
  const toggleLike = () => {
    setLiked(!liked);
  };

  const Edit = () => {
    setshow(!show);
  }

  const Delete = () => {
    if (token === token1) {

      dispatch(Deletepost({ token: token, image: image }));
    }
    else if (login === "Login") {
      alert("Please Login to delete the posts");
    }
    else {
      alert("You can't delete other's post");
    }
    setshow(!show);
  }
  return (
    <>
      <div className="max-w-[100%] min-w-[100%] mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl mb-8">
        <div className="relative flex flex-row">
          <div>

            <img
              src={profi}
              className="w-12 h-12 rounded-[60px] ml-5 mb-3 cursor-pointer inline-block"
              alt="Logo"
            />
            <p className="inline-block ml-4 font-semibold text-base text-[20px]">{name}</p>
          </div>
          <div className="flex items-center absolute right-0 text-3xl text-center mt-4 mr-3 cursor-pointer hover:text-gray-500">

            <MdEditNote onClick={Edit} />
          </div>
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
                className={`h-6 w-6 ${liked ? "text-red-500" : "text-gray-500 "
                  }`}
                onClick={token && toggleLike}
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
      {show && (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-70 backdrop-blur-lg cursor-pointer z-50">
          <div className="modal-box bg-gray-300 max-w-md mx-auto pt-3 pb-3 pl-4 pr-4 rounded-lg shadow-lg text-black flex flex-col">
            <div className="relative right-3">
              <p className="text-[17px] p-2 text-black  pr-6 pl-6  hover:font-semibold inline-block" onClick={Edit}>Edit Post</p>
              <RiEdit2Line className="inline-block relative left-6" />
            </div>
            <div className='h-[1px] bg-gray-500 w-[100%]'></div>
            <div className="relative right-3">
              <p className="text-[17px] p-2 text-black pr-6 pl-6 hover:font-semibold inline-block" onClick={Delete}>Delete Post</p>
              <MdDeleteOutline className="inline-block relative left-1" />
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default DisplayImages;
