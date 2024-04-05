import { createSlice } from "@reduxjs/toolkit";

const initialState = []; 

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost(state, action) {
            console.log(action.payload);
            state.push(action.payload);
            
        },
        removePost(state, action) {
            const index = action.payload;
            state.splice(index, 1);
        },
       
    }
});

export const { addPost, removePost } = postSlice.actions;

export default postSlice.reducer;
