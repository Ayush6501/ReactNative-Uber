import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    token: null,
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.token = action.payload.token;
            state.email = action.payload.email;
        },

        setUserName: (state, action) => {
            state.name = action.payload.name;
        },

        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.token = null;
        },
    },
});

export const { setUserLoginDetails, setSignOutState, setUserName } = userSlice.actions;

export const selectUserName = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserToken = (state) => state.user.token;

export default userSlice.reducer;
