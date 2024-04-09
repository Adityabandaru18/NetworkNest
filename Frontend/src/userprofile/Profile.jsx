import React, { useRef } from "react";
import Menu from "../Home/Menu";
import { useSelector, useDispatch } from "react-redux";
import e1 from "../assets/e1.jpg";
import Displayuser from "./Displayuser";

import { useState, useEffect } from "react";
import { Addadmin } from "../redux/slices/AddpostsAPI";
import { Showprofile } from "../redux/slices/ProfilesliceAPI";

const Profile = () => {
  const prof = useSelector((state) => state.profile);
  const token = useSelector((state) => state.token.text);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const login = useSelector((state) => state.Login.text);
  const admin_name = useSelector((state) => state.Admin);
  const profile_pic = useSelector(state => state.admin_profile.data);
  const [get, setget] = useState(false);
  console.log(profile_pic);
  let formData;
  const handleFileChange = async (e) => {
    console.log(login);
    if (login === "Login") {
      alert("Please login to update the profile picture");
    } else {
      const file = e.target.files[0];
      console.log(file);
      formData = new FormData();
      formData.append("admin_image", file);
      if (file) {
        dispatch(Addadmin({ token: token, formData: formData }));
        setget(!get);
      }
    }
  };

  const handleImageChange = () => {
    if (login === "Login") {
      alert("Please login to update the profile picture");
    } else {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
      setget(!get);
    }
  };



  useEffect(() => {
    dispatch(Showprofile(token));

  }, [get]);

  const profi = `http://localhost:4000/uploads/${profile_pic.user_image}`;
  console.log(profi);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-[15%]">
          <Menu />
        </div>
        <div className="w-[80%]">
          <div className="w-[90%] m-auto flex flex-col mt-8">
            <div className="w-[100%] h-[30%] flex flex-row justify-evenly">
              <div className="w-[40%] md:w-[20%] flex justify-center items-center relative top-4 right-10">
                {profi && <img
                  src={profile_pic.length != 0 ? profi : e1}
                  className="w-32 h-32 rounded-full ml-5 mb-3 cursor-pointer"
                  alt="Profile"
                  id="lopo11"
                />
                }
                <input
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  name="admin_image" />
              </div>
              <div className="w-[40%] mt-9 flex flex-col relative md:right-10" id="admin_panel">
                <div className="flex  md:justify-evenly justify-around flex-col md:flex-row">
                  {profile_pic.name ? <p className="inline text-xl md:text-[26px] relative left-10">{profile_pic.name}</p> : <p className="inline text-xl md:text-[26px] relative right-6">Admin</p>}
                  <button
                    className="p-1 md:p-1 ml-3 md:ml-0 text-xs md:text-sm border border-blue-300 rounded-[10px] hover:text-blue-600 font-semibold bg-blue-600 text-white hover:bg-white relative right-10 mt-2 md:mt-0 md:right-0"
                    onClick={handleImageChange}
                  >
                    Edit profile
                  </button>
                </div>
                <div className="mt-9 flex justify-center items-center space-x-6">
                  <p className="inline-block text-xs md:text-[19px]">Z Posts</p>
                  <p className="inline-block text-xs md:text-[19px]">X followers</p>
                  <p className="inline-block text-xs md:text-[19px]">Y followers</p>
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
