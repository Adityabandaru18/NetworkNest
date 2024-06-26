import { Schema, model } from "mongoose";


const postSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user_image: {
      type: String,
      default: "../uploads/e1.jpg"
    },
    user_text: String,
    images: String,
    name: {
      type: String,
      required: true, 
    },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

export default Post;
