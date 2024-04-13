import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Showprofile = createAsyncThunk(
  "showprofile",

  async (token) => {
    
    try {
      const response = await axios.get(`http://localhost:4000/backend/admin/${token}`);

      return response.data.posts;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const Showprofileslice = createSlice({
  name: "Showprofile",
  initialState: {
    data: []
  },
  extraReducers: (builder) => {
    builder.addCase(Showprofile.pending, (state) => {
    //   state.isLoading = true;
    });
    builder.addCase(Showprofile.fulfilled, (state,action) => {

        state.data=action.payload;
      });
    builder.addCase(Showprofile.rejected,(state) => {
        // state.isLoading = true;
        
      });
  },
});

export default Showprofileslice.reducer;
