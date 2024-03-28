import React, { useRef} from "react";
import Menu from "../Home/Menu";
import { useSelector, useDispatch } from "react-redux";
import { addPicture } from "../redux/slices/profileslice";
import e1 from "../assets/e1.jpg";
import Displayuser from "./Displayuser";
import { rootState } from "../redux/store";

interface Profile1 {
  
  image: Blob | MediaSource | null;
}


const Profile: React.FC = () => {

  const prof: Profile1 = useSelector((state: rootState) => state.profile);
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const login = useSelector((state:rootState) => state.Login.text);
  const admin_name = useSelector((state:rootState) => state.Admin);


  const handleImageChange = () => {

    if(login === "Login"){
      alert("Please login to update the profile picture");
    }
    else{

      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
 console.log(login);
    if(login === "Login"){
      alert("Please login to update the profile picture");
    }
    else{

      const file = e.target.files?.[0];
      if (file) {
        dispatch(addPicture(file));
      }
    }
    };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-[15%]">
          <Menu />
        </div>
        <div className="w-[80%]">
          <div className="w-[90%] m-auto flex flex-col mt-8">
            <div className="w-[100%] h-[30%] flex flex-row">
              <div className="w-[30%]">
                <img
                  src={prof.image ? URL.createObjectURL(prof.image) : e1}
                  className="w-32 h-32 rounded-full ml-5 mb-3 cursor-pointer"
                  alt="Profile"
                  id="lopo11"
                />
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                />
              </div>
              <div className="w-[60%] mr-40 mt-9" id="admin_panel">
                <div className="block">
                  {admin_name.text ? <p className="inline-block text-2xl">{admin_name.text}</p> : <p className="inline text-2xl">Admin</p>} 
                  <button className="border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 inline py-1 px-2 ml-6"
                    onClick={handleImageChange}>
                    Update profile pic
                  </button>
                </div>
                <div className="mt-3">

                {/* Display follower and following counts */}
                {/* <p className="inline-block mr-3 text-m">z Posts</p>
                <p className="inline-block mr-3 text-m">x followers</p>
                <p className="inline-block text-xl">y followers</p> */}

                </div>
              </div>
            </div> 
  
            <br />
            <br />
            <hr />
            <p className="text-gray-500 m-auto text-xl my-1">Posts</p>
            <br />
        
            <div>
             <Displayuser />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
