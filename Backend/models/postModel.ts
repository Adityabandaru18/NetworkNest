import { Schema, model } from "mongoose";

const postSchema = new Schema({
    token: {
        type: String,
        required: true
    },
    user_image: String,
    user_text: String,
    images: String,
    name: {
        type: String,
        required: true
    }
},{
    timestamps: true
});

const Post = model("Post", postSchema);

// Create and save a new post


export default Post;
