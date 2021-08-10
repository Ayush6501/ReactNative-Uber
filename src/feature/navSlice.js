import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: null,
    destination: null,
    travelTimeInfo: null,
};

const navSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setTravelTimeInfo: (state, action) => {
            state.travelTimeInfo = action.payload;
        },
    },
});

export const {
    setOrigin,
    setDestination,
    setTravelTimeInfo
} = navSlice.actions;

export const selectOrigin = (state) => state.nav.origin;
export const selectDestination = (state) => state.nav.destination;
export const selectTravelTimeInfo = (state) => state.nav.travelTimeInfo;

export default navSlice.reducer;
