import Post from "../models/postModel";
import { Request, Response } from "express";

const Add_name = async (req: Request, res: Response) => {
  let token = req.params.id;
  const { name } = req.body;
  try {
    const new_user = new Post({
      name: name,
      token: token,
      user_image: "1712681747634-443219254e1.jpg"
  
    });

    await new_user.save();
    res.status(202).json({ message: "User details saved successfully" });
  } catch (error) {
    res.status(404).json({ error });
  }
};


const Addposts = async (req:Request, res:Response)=>{
  const {name , token} = req.body;
  const image = req.file?.filename;

  try{
    const exist = await Post.findOne({token});
    const new_post = new Post({
      name:exist?.name,
      images:image,
      token:token,
      user_text:name,
      user_image: "1712681747634-443219254e1.jpg"
    })

    await new_post.save();
    res.status(202).json({new_post});
  }
  catch (error) {
    res.status(404).json({ error });
  }
  
}

// const Addposts = async (req: Request, res: Response) => {

//   try {
//     const { name, token, admin } = req.body;
//     console.log(token);
//     const image = req.file?.filename;
//     const exist = await Post.findOne({ token });
//     const newPost = new Post({
//       name: admin,
//       user_text: name,
//       images: image,
//       token: token,
//       user_image: exist?.user_image,
//     });

//     const savedPost = await newPost.save();
//     res
//       .status(201)
//       .json({ message: "Post added successfully", post: savedPost });
//   } catch (error) {
//     res.status(500).json({ error });
//   }
// };

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

  try {
    const existingPost = await Post.findOne({ token });

    if (!existingPost) {
      const newPost = new Post({
        token: token,
        user_image: image,
      });
      await newPost.save();
      res
        .status(202)
        .json({ message: "New post created with image", post: newPost });
    } else {
      const result = await Post.updateMany(
        { token },
        { $set: { user_image: image } }
      );
      res
        .status(202)
        .json({ message: "Existing posts updated with image", result });
    }
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

const All_posts = async (req: Request, res: Response) => {
  try {
    const posts = await Post.find({});
    return res.status(202).json({ posts });
  } catch (error) {
    console.error("Error occurred while fetching posts:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// const Add_adminname = async (req:Request,res:Response) =>{

// }
// const token_found = async (req: Request, res:Response) => {
//     try {
//         const token = req.params.id;
//         const found = await Post.find({ token });
//         console.log(found);
//         if (found.length > 0) { // Check if any documents are found
//             res.status(202).send("1");
//         } else {
//             res.status(303).send("0");
//         }
//     } catch (error) {
//         res.status(404).json({ error });
//     }
// };

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
const Foundt = async (req: Request, res: Response) => {
  let token = req.params.id;
  try {
    const t_found = await Post.findOne({ token });
    if (t_found) {

      res.send("1");
    } else {
      console.log("Check token");
      res.send("0");
    }
  } catch (error) {
    res.status(404).json({ error });
  }
};

export {
  Addposts,
  Deleteposts,
  Showposts,
  Add_admin,
  Show_Admin,
  All_posts,
  Foundt,
  Add_name
};
