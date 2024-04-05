import { createSlice } from "@reduxjs/toolkit";


export const profileSlice = createSlice({
    name: "profile",
    initialState:{
        image: null
    },
    reducers: {
        addPicture(state, action) {
            state.image = action.payload;
        }
    }
});

export const { addPicture } = profileSlice.actions;
export default profileSlice.reducer;
