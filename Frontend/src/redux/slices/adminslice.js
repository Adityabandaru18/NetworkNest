import { createSlice } from "@reduxjs/toolkit";


export const adminSlice = createSlice({
    name: "admin",
    initialState:{
        text:""
    },
    reducers: {
        addadmin(state, action) {
            state.text = action.payload;
        }
    }
});

export const { addadmin } = adminSlice.actions;
export default adminSlice.reducer;
