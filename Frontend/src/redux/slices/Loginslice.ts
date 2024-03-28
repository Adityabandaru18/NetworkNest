import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Login {
    text: string
}

const initialState: Login = {
    text: "Login"
};

export const LoginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        ChangeLogin(state, action: PayloadAction<string>) {
            state.text = action.payload;
        }
    }
});

export const { ChangeLogin } = LoginSlice.actions;
export default LoginSlice.reducer;
