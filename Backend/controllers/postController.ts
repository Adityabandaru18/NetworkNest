import Post from "../models/postModel";
import { Request, Response } from "express";

const Addposts = async (req: Request, res: Response) => {
  let newPost;
  try {
    const { name, token, admin } = req.body;
    console.log(req.body);

    const image = req.file?.filename;
    console.log(image);
    newPost = new Post({
      name: admin,
      user_text: name,
      images: image,
      token: token,
    });

    const savedPost = await newPost.save();
    res
      .status(201)
      .json({ message: "Post added successfully", post: savedPost });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const Showposts = async (req: Request, res: Response) => {
  try {
    const token = req.params.id;

    const posts = await Post.find({ token });
    console.log(posts);
    if (!posts) {
      return res.status(404).json({ message: "No posts found for the token" });
    }
    return res.status(200).json({ posts });
  } catch (error) {
    console.error("Error occurred while fetching posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

const Deleteposts = async (req: Request, res: Response) => {};


const Add_admin = async (req: Request, res: Response) => {
  const token = req.params.id;
  const image = req.file?.filename;
  console.log("Image name: ")
  console.log(image);

  try {
    const result = await Post.updateMany(
      { token },
      { $set: { user_image: image } },
      { $upsert: true} 
    );

    res.status(202).json({ result, message: "Added piccuuu" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const Show_Admin = async (req: Request, res: Response) => {
  try {
    const token = req.params.id;

    const posts = await Post.findOne({ token });
    console.log(posts);
    if (!posts) {
      return res.status(404).json({ message: "No posts found for the token" });
    }
    return res.status(200).json({ posts });
  } catch (error) {
    console.error("Error occurred while fetching posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// const Add_adminname = async (req:Request,res:Response) =>{

// }

// const Show_adminname = async (req:Request,res:Response) =>{

//     const token = req.body;

//     try{

//     }

// }

// const Show_profile = async (req:Request,res:Response) =>{
//   try{
//     const token = req.params.id;

//   }

// }

export { Addposts, Deleteposts, Showposts, Add_admin, Show_Admin };
