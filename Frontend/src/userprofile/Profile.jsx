import React, { useRef } from "react";
import Menu from "../Home/Menu";
import { useSelector, useDispatch } from "react-redux";
import e1 from "../assets/e1.jpg";
import Displayuser from "./Displayuser";

import {useState, useEffect } from "react";
import { Addadmin } from "../redux/slices/AddpostsAPI";
import { Showprofile } from "../redux/slices/ProfilesliceAPI";

const Profile = () => {
  const prof = useSelector((state) => state.profile);
  const token = useSelector((state) => state.token.text);
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const login = useSelector((state) => state.Login.text);
  const admin_name = useSelector((state) => state.Admin);
  const [get, setget] = useState(false);
  const profile_pic = useSelector(state => state.admin_profile.data)
  console.log(profile_pic);
  const handleFileChange = async (e) => {
    console.log(login);
    if (login === "Login") {
      alert("Please login to update the profile picture");
    } else {
      const file = e.target.files[0];
      console.log(file);
      const formData = new FormData();
      formData.append("admin_image", file);
      if (file) {
        dispatch(Addadmin({token:token, formData:formData}));
       

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

  const profi = `http://localhost:4000/uploads/${profile_pic.user_image}` || "";
  console.log(profi);

  return (
    <div className="flex flex-col">
      <div className="flex flex-row">
        <div className="w-[15%]">
          <Menu />
        </div>
        <div className="w-[80%]">
          <div className="w-[90%] m-auto flex flex-col mt-8">
            <div className="w-[100%] h-[30%] flex flex-row justify-center">
              <div className="w-[30%]">
                <img
                  src={profile_pic.length!=0 ? profi : e1}
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
                  name="admin_image"                />
              </div>
              <div className="w-[60%] mr-40 mt-9" id="admin_panel">
                <div className="block">
                  {admin_name.text ? (
                    <p className="inline-block text-2xl">{admin_name.text}</p>
                  ) : (
                    <p className="inline text-2xl">Admin</p>
                  )}
                  <button
                    className="border border-transparent text-sm font-medium rounded-md bg-indigo-600 hover:bg-indigo-700 relative right-3"
                    onClick={handleImageChange}
                  >
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
