import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const Addpost = createAsyncThunk(
  "Addpost",
  async (formData) => { 
    try {
      const response = await axios.post(
        "http://localhost:4000/backend/posts",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      console.log("Added data");
      return response.data;
    } catch (error) {
      console.error("Error occurred in the Posts.tsx page:", error);
    
    }
  }
);

export const Addadmin = createAsyncThunk(
  "add_admin",
  async ({token, formData}) => { 
    try {
      const response = await axios.post(
        `http://localhost:4000/backend/admin/${token}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response);
      console.log("Updated profile pic");
      return response.data;
    } catch (error) {
      console.error("Error occurred in the Posts.tsx page:", error);
    }
  }
)


const Addslice = createSlice({
  name: "Addpost",
  initialState: {
    isLoading: false,
  },
  reducers: {}, 
},
);

export default Addslice.reducer;
