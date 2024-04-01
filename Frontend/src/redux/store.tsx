import { configureStore } from '@reduxjs/toolkit'
import postreducer from "./slices/postslice";
import friendreducer from "./slices/friendsslice";
import profilereducer from './slices/profileslice';
import Loginreducer from "./slices/Loginslice";
import adminreducer from "./slices/adminslice";
import tokenreducer from "./slices/tokenslice";

export const store = configureStore({
  reducer: {
    post: postreducer,
    friend : friendreducer,
    profile : profilereducer,
    Login: Loginreducer,
    Admin : adminreducer,
    token: tokenreducer
  },
});


export type rootState=ReturnType<typeof store.getState>
