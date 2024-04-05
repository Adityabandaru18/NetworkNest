import { createSlice} from "@reduxjs/toolkit";


export const TokenSlice = createSlice({
    name: "token",
    initialState:{
        text: "",
    },
    reducers: {
        AddToken(state, action) {
            state.text = action.payload;
        }
    }
});

export const { AddToken } = TokenSlice.actions;
export default TokenSlice.reducer;
