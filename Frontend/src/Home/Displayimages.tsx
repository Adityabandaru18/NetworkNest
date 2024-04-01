import React, { useState} from "react";
import { FaHeart, FaComment, FaShare } from "react-icons/fa";

interface Post {
  name: string;
  image: string;
  user_text: string;
}


const DisplayImages: React.FC<Post> = ({ name, image,user_text }) => {
  const [liked, setLiked] = useState(false);


  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <>
    
        <div className="max-w-[700px] mx-auto bg-white  shadow-md overflow-hidden md:max-w-2xl mb-8">
          <div>
            <p className="inline-block ml-4 font-semibold text-base">
              {name}
            </p>
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
                  className={`h-6 w-6 ${liked ? "text-red-500" : "text-gray-500 "}`}
                  onClick={toggleLike}
                />
                <FaComment className="h-6 w-6 mx-4 text-gray-500" />
                <FaShare className="h-6 w-6 text-gray-500" />
              </div>
            </div>
            {user_text && <p className="inline-block ml-4 font-semibold text-base">{user_text}</p>}
          </div>
        </div>
      
    </>
  );
};

export default DisplayImages;
