import { createSlice} from "@reduxjs/toolkit";



export const LoginSlice = createSlice({
    name: "login",
    initialState:{
        text:"Login"
    },
    reducers: {
        ChangeLogin(state, action) {
            state.text = action.payload;
        }
    }
});

export const { ChangeLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
