import { createSlice } from "@reduxjs/toolkit";

interface friend{
    name: string,
    no_of_friend: number;
}

const initialState : friend[] = [];

export const friendslice = createSlice({
    name: "Friends",
    initialState,
    reducers : {


    }

});

export default friendslice.reducer;
