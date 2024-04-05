import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Showpost = createAsyncThunk(
  "showpost",

  async (token) => {
    try {
      const response = await axios.get(`http://localhost:4000/backend/posts/${token}`);
      console.log("redux get");
      console.log(response);
      return response.data.posts;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const Showslice = createSlice({
  name: "Showslice",
  initialState: {
  
    data: []
  },
  extraReducers: (builder) => {
    builder.addCase(Showpost.pending, (state) => {
    //   state.isLoading = true;
    });
    builder.addCase(Showpost.fulfilled, (state,action) => {
        state.isLoading = true;
        state.data=action.payload;
      });
    builder.addCase(Showpost.rejected,(state) => {
        // state.isLoading = true;
        
      });
  },
});

export default Showslice.reducer;
