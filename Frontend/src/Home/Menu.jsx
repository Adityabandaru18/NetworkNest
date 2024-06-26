import logo1 from "../assets/logo (1).png";
import { IoHomeOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { MdOutlineExplore } from "react-icons/md";
import { BsCameraReels } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { LuMessageSquarePlus } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import e1 from "../assets/e1.jpg";
import "./styles.css";
import React from "react";
import { useEffect } from "react";
import { Showprofile } from "../redux/slices/ProfilesliceAPI";

const Menu = () => {
  const log = useSelector((state) => state.Login);
  const profile_pic = useSelector(state => state.admin_profile.data)
  const token = useSelector(state => state.token.text);
  const dispatch = useDispatch();
  let profi = `http://localhost:4000/uploads/${profile_pic.user_image}`
  


  useEffect(()=>{
dispatch(Showprofile(token));
  },[]);
  return (
    <div className="h-[100vh] sticky top-0 flex flex-col justify-between ">
      <div>
        <NavLink to="/">
          {" "}
          <img
            src={logo1}
            className="w-[80px] m-auto cursor-pointer mt-3 ml-9"
            id="lopo"
          />
        </NavLink>
      </div>
      <div className="mb-16">
        <ul className="ml-6">
          <NavLink to="/">
            <li className="my-3 text-lg font-semibold hover:text-indigo-900 cursor-pointer">
              <IoHomeOutline className="inline-block" />
              &nbsp;&nbsp; <span>Home</span>
            </li>
          </NavLink>
          <li className="my-3 text-lg font-semibold hover:text-indigo-900 cursor-pointer">
            <IoIosSearch className="inline-block" />
            &nbsp;&nbsp; <span>Search</span>
          </li>
          <li className="my-3 text-lg font-semibold hover:text-indigo-900 cursor-pointer">
            <MdOutlineExplore className="inline-block" />
            &nbsp;&nbsp; <span>Explore</span>
          </li>
          <li className="my-3 text-lg font-semibold hover:text-indigo-900 cursor-pointer">
            <BsCameraReels className="inline-block" /> &nbsp;&nbsp;{" "}
            <span>Reels</span>
          </li>
          <li className="my-3 text-lg font-semibold hover:text-indigo-900 cursor-pointer">
            <LuMessageSquarePlus className="inline-block" />
            &nbsp;&nbsp; <span>Messages</span>
          </li>

          <NavLink to="/login">
            <li className="my-3 text-lg font-semibold hover:text-indigo-900 cursor-pointer">
              <FiLogOut className="inline-block" />
              &nbsp;&nbsp; <span>{log.text}</span>
            </li>
          </NavLink>
        </ul>
      </div>
      <div>
        <div>
          <NavLink to="/admin">
            <img   
           src={profile_pic.length!=0 ? profi : e1}
              className="w-20 h-20 rounded-[60px] ml-5 mb-3 cursor-pointer"
              id="lopo1"
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Menu;
