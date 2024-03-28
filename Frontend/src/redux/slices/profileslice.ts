import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Profile {
    image: Blob | MediaSource | null;
}

const initialState: Profile = {
    image: null
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        addPicture(state, action: PayloadAction<File>) {
            state.image = action.payload;
        }
    }
});

export const { addPicture } = profileSlice.actions;
export default profileSlice.reducer;
