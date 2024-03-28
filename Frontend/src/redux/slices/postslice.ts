import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Post {
    image: File;
    name?: string;
}


const initialState: Post[] = []; 

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost(state, action: PayloadAction<Post>) {
            console.log(action.payload);
            state.push(action.payload);
        },
        removePost(state, action: PayloadAction<number>) {
            const index = action.payload;
            state.splice(index, 1);
        },
       
    }
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
