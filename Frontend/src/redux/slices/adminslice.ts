import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Admin {
    text: string;
}

const initialState: Admin = {
    text: ""
};

export const adminSlice = createSlice({
    name: "admin",
    initialState,
    reducers: {
        addadmin(state, action: PayloadAction<string>) {
            state.text = action.payload;
        }
    }
});

export const { addadmin } = adminSlice.actions;
export default adminSlice.reducer;
