
import { BiImages } from "react-icons/bi";
import { LiaVideoSolid } from "react-icons/lia";
import { GoPaperclip } from "react-icons/go";
import { Button } from "@chakra-ui/react";
import DisplayImages from "./Displayimages";
import { useDispatch, useSelector } from 'react-redux';
import { addPost } from '../redux/slices/postslice';
import e1 from "../assets/e1.jpg";
import { rootState } from '../redux/store';

interface Post{
  name: string,
  image: File
}

const Posts: React.FC = () => {
  const login:string = useSelector((state:rootState) => state.Login.text);
   const postdata = useSelector((state:rootState) => state.post);
   const profile = useSelector((state:rootState) => state.profile);
   const dispatch = useDispatch();

 const upload = ()=>{
  if(login === "Login"){
    alert("Please login to upload your posts");
  }
 }

   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
    if(login === "Login"){
      alert("Please login to upload your posts");
    }
    else{

      e.preventDefault();
      const formData = new FormData(e.currentTarget);
      const name = formData.get('name') as string;
    const image = formData.get('image') as File;
    console.log(image);
    const newPost:Post = { name, image };
    dispatch(addPost(newPost));                           // Dispatched the postdata
  }
}
  

  return (
    <div>
      <div className="w-[100%] m-auto h-[150px] mt-3 flex flex-col" id="none_div">
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
                <span   onClick={upload}>  Images</span>
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
                  <span   onClick={upload}>Videos</span>
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
                <label htmlFor="attachment-upload" className="custom-file-upload">
                  <GoPaperclip className="inline-block mx-3" />
                  <span   onClick={upload}>Attachments</span>
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
        {postdata ? postdata.map((post, index) => (
       
            <DisplayImages name={post.name || ""} image={post.image} key={index}/>
        
        )): null}
      </ul>
    </div>
  );
};

export default Posts;
