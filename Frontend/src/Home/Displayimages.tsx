import React, { useState } from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";
import { useSelector } from "react-redux";
import { rootState } from "../redux/store";


interface Post {
  name: string;
  image: File;
}


const DisplayImages: React.FC<Post> = ({ name, image }) => {

  const [liked, setLiked] = useState(false);
  const admin_name = useSelector((state: rootState) => state.Admin);

  console.log(image.name);

  const toggleLike = () => {
    setLiked(!liked); 
  };

  return (
   <> 
   {image.name &&  
   
   <div className="max-w-[600px] mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl mb-8">
    <div>
      <p className="inline-block ml-4 font-semibold text-base">
        {admin_name.text}
      </p>
    </div>
    <div className="relative">
      <img
        className="w-full h-[450px] object-cover"
        src={URL.createObjectURL(image)}
        alt="Post"
      />
    </div>
    <div className="p-4">
      <div className="flex justify-between">
      <div className="flex flex-row">
          <FaHeart
            className={`h-6 w-6 ${liked ? "text-red-500" : "text-gray-500 "}`}
            
            onClick={toggleLike}
            />
          <FaComment className="h-6 w-6 mx-4 text-gray-500" />
          <FaShare className="h-6 w-6 text-gray-500" />
            </div>
  
      </div>
      {name && <p className="inline-block ml-4 font-semibold text-base">{name}</p> }
    </div>
  </div>
   }
   </>
  );
};

export default DisplayImages;
