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


export const Allposts = createAsyncThunk(
  "Allpost",

  async () => {
    try {
      const response = await axios.get("http://localhost:4000/backend");
      return response.data.posts;
    } catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }
);

export const Deletepost = createAsyncThunk(
  "Deleteposts",
  async ({token, image}) => {
    try{
      const response = await axios.post(`http://localhost:4000/backend/delete/${token}`,{image});
      console.log("Post deleted in redux");
      console.log(response);
    }
    catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }
)

export const Editpost = createAsyncThunk(
  "Editposts",
  async ({token, image}) => {
    try{
      const response = await axios.put(`http://localhost:4000/backend/edit/${token}`,{image});
      console.log("Post Updated in redux");
      console.log(response);
    }
    
    catch (error) {
      console.error("Error occurred while fetching data:", error);
    }
  }
)
const Showslice = createSlice({
  name: "Showslice",
  initialState: {
    data: [],
    Alldata: [],
    latestPostedPicture: null, 
  },
  extraReducers: (builder) => {
    builder.addCase(Showpost.pending, (state) => {
    });
    builder.addCase(Showpost.fulfilled, (state, action) => {
      state.data = action.payload;
    });
    builder.addCase(Showpost.rejected, (state) => {
    });

    builder.addCase(Allposts.fulfilled, (state, action) => {
      state.latestPostedPicture = action.payload[0]; // Assuming action.payload is an array of posts and you want to display the first post
      state.Alldata = action.payload;
    });
  },
});

export default Showslice.reducer;
