import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Token {
    text: string | null
}

const initialState: Token = {
    text: ""
};

export const TokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        AddToken(state, action: PayloadAction<string>) {
            state.text = action.payload;
        }
    }
});

export const { AddToken } = TokenSlice.actions;
export default TokenSlice.reducer;
