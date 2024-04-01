import Post from "../models/postModel";
import { Request,Response } from "express";

const Addposts = async (req:Request,res:Response) =>{
   
    let newPost;
    try {
 
        const { name, token, admin } = req.body;
        const image = req.file?.filename;

        newPost = new Post({
            name: admin,
            user_text: name,
            images: image,
            token:token
        });

        const savedPost = await newPost.save();
        res.status(201).json({ message: 'Post added successfully', post: savedPost });
    }
    catch (error) {
        res.status(500).json({ error });
    }
  

}

   
    const Showposts = async (req: Request, res: Response) => {
        try {
           
            const token = req.params.id; 
            
            const posts = await Post.find({token}); 
            console.log(posts);
            if (!posts) {
              return res.status(404).json({ message: 'No posts found for the token' });
            }
            return res.status(200).json({ posts });
          } catch (error) {
            console.error('Error occurred while fetching posts:', error);
            return res.status(500).json({ error: 'Internal server error' });
          }
      };


const Deleteposts = async (req:Request,res:Response) =>{
    
    
}


const Add_adminname = async (req:Request,res:Response) =>{


}

const Show_adminname = async (req:Request,res:Response) =>{


}

const Add_profile = async (req:Request,res:Response) =>{


}

export { Addposts, Add_adminname, Deleteposts, Add_profile, Showposts,Show_adminname };

