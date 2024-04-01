import { BiImages } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { GoPaperclip } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import DisplayImages from "./Displayimages";
import { useSelector } from "react-redux";
import e1 from "../assets/e1.jpg";
import { rootState } from "../redux/store";
import axios from "axios";
import {useEffect, useState} from "react";
import { useCallback } from 'react';

// interface Post {
//   name: string;
//   image: File;
// }
interface Datafetch{
  name: string,
  images:  string,
  user_text: string,

}


const Posts: React.FC = () => {
  const login: string = useSelector((state: rootState) => state.Login.text);
  // const postdata = useSelector((state: rootState) => state.post);
  const profile = useSelector((state: rootState) => state.profile);
  const token = useSelector((state: rootState) => state.token.text);
  const admin_name = useSelector((state: rootState) => state.Admin);
  const [fetchedData, setFetchedData] = useState<Datafetch[]>([]);
  const [get,setget] = useState(false);
  // const dispatch = useDispatch();

  const upload = () => {
    if (login === "Login") {
      alert("Please login to upload your posts");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (login === "Login") {
      alert("Please login to upload your posts");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", e.currentTarget.name.value);
    formData.append("image", e.currentTarget.image.files[0]); // Get the first file from the input
    formData.append("token",token);
    formData.append("admin",admin_name.text);
  
    try {
      const response = await axios.post("http://localhost:4000/backend/posts", formData, {
        headers: {
          "Content-Type": "multipart/form-data" // Set the correct content type for file upload
        }
       
      
      }
      );
      console.log(response);
      setget(!get)
      // console.log("Name added successfully to the database");
      // console.log(response.data); // Log any response from the server
  
      // const newPost: Post = { name: e.currentTarget.name.value, image: e.currentTarget.image.files[0] };
      // dispatch(addPost(newPost)); // Dispatched the postdata
    } catch (error) {
      console.error("Error occurred in the Posts.tsx page:", error);
    }

  };
 const ft=token;
const fetchImages = useCallback(async () => {
  try {
    const response = await axios.get(`http://localhost:4000/backend/posts/${ft}`);
    const { data } = response; 
    console.log("Get function");
    setFetchedData(data.posts)
    console.log(data.posts)
    console.log(data);
  } catch (error) {
    console.error("Error occurred while fetching data:", error);
  }
}, []);

useEffect(() => {
  fetchImages(); 
}, [fetchImages]);
  
  return (
    <div>
      <div
        className="w-[90%] m-auto h-[150px] mt-3 flex flex-col"
        id="none_div"
      >
        <form onSubmit={handleSubmit}>
          <div className="h-[50%] flex flex-row items-center">
            <img
              src={profile.image ? URL.createObjectURL(profile.image) : e1}
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
      {fetchedData ? fetchedData.map((data, index) => (
          <DisplayImages
            name={data.name || ""}
            image={data.images}
            user_text={data.user_text}
            key={index}
          />
        )): null}
      </ul>
    </div>
  );
};

export default Posts;
