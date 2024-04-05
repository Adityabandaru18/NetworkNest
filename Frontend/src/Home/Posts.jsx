import { BiImages } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { GoPaperclip } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import DisplayImages from "./Displayimages";
import { useSelector, useDispatch } from "react-redux";
import e1 from "../assets/e1.jpg";
import axios from "axios";
import { useEffect, useState } from "react";
import { useCallback } from "react";
import  {Addpost}  from "../redux/slices/AddpostsAPI";
import {Showpost} from "../redux/slices/ShowpostsAPI";
import React from "react";


const Posts = () => {
  const login= useSelector((state) => state.Login.text);
  const profile = useSelector((state) => state.profile);
  const token = useSelector((state) => state.token.text);
  const admin_name = useSelector((state) => state.Admin);
  const fetchedData = useSelector((state)=>state.showpost.data);
  const profile_pic = useSelector(state => state.admin_profile.data)
  const profi = `http://localhost:4000/uploads/${profile_pic.user_image}` || " ";
  console.log(profi);

  const [get, setget] = useState(false);
  const dispatch = useDispatch();

  const upload = () => {
    if (login === "Login") {
      alert("Please login to upload your posts");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (login === "Login") {
      alert("Please login to upload your posts");
      return;
    }

    const formData = new FormData();
    formData.append("name", e.currentTarget.name.value);
    formData.append("image", e.currentTarget.image.files[0]); 
    console.log(e.currentTarget.image.files[0]);
    formData.append("token", token);
    formData.append("admin", admin_name.text);

    dispatch(Addpost(formData));
    setget(!get);
  

  };


  useEffect(() => {
   dispatch(Showpost(token))
  }, [get]);

  return (
    <div>
      <div
        className="w-[90%] m-auto h-[150px] mt-3 flex flex-col"
        id="none_div"
      >
        <form onSubmit={handleSubmit}>
          <div className="h-[50%] flex flex-row items-center">
            <img
              src={profile_pic.length!=0 ? profi : e1}
              className="w-12 h-12 rounded-[60px] ml-5 mb-3 cursor-pointer"
              alt="Logo"
            />
            <input
              type="text"
              placeholder="Write your thought here"
              className="border-yellow-300 ml-5 outline-none"
              name="name"
            />
          </div>
          <hr />
          <div className="w-[100%] items-center content-center">
            <ul className="flex flex-row justify-between w-[100%] mt-3 align-baseline items-center content-center cursor-pointer">
              <li>
                <label htmlFor="image-upload" className="custom-file-upload">
                  <BiImages className="inline-block mx-3" />
                  <span onClick={upload}> Images</span>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  onClick={upload}
                  style={{ display: "none" }}
                  name="image"
                />
              </li>
              <li>
                <label htmlFor="video-upload" className="custom-file-upload">
                  <LiaVideoSolid className="inline-block mx-3" />
                  <span onClick={upload}>Videos</span>
                </label>
                <input
                  id="video-upload"
                  type="file"
                  onClick={upload}
                  accept="video/*"
                  style={{ display: "none" }}
                  name="video"
                />
              </li>
              <li>
                <label
                  htmlFor="attachment-upload"
                  className="custom-file-upload"
                >
                  <GoPaperclip className="inline-block mx-3" />
                  <span onClick={upload}>Attachments</span>
                </label>
                <input
                  id="attachment-upload"
                  onClick={upload}
                  type="file"
                  style={{ display: "none" }}
                  name="attachment"
                />
              </li>
              <li>
                <Button colorScheme="green" type="submit">
                  Post
                </Button>
              </li>
            </ul>
          </div>
        </form>
      </div>
      <ul>
        {fetchedData
          ? fetchedData.map((data, index) => (
              <DisplayImages
                name={data.name || ""}
                image={data.images}
                user_text={data.user_text}
                key={index}
              />
            ))
          : null}
      </ul>
    </div>
  );
};

export default Posts;