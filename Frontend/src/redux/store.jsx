import { configureStore } from '@reduxjs/toolkit'
import postreducer from "./slices/postslice.js";
import profilereducer from './slices/profileslice.js';
import Loginreducer from "./slices/Loginslice.js";
import adminreducer from "./slices/adminslice.js";
import tokenreducer from "./slices/tokenslice.js";
import Addpostreducer from './slices/AddpostsAPI.js';
import Showpostreducer from "./slices/ShowpostsAPI.js"
import Showprofilereducer from "./slices/ProfilesliceAPI.js" 

export const store = configureStore({
  reducer: {
    post: postreducer,
    profile : profilereducer,
    Login: Loginreducer,
    Admin : adminreducer,
    token: tokenreducer,
    addpost: Addpostreducer,
    showpost: Showpostreducer,
    admin_profile: Showprofilereducer
  },
});

