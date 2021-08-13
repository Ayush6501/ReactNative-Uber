import {configureStore} from "@reduxjs/toolkit";
import navReducer from '../feature/navSlice';
import userReducer from '../feature/userSlice';

export default configureStore({
    reducer: {
        nav: navReducer,
        user: userReducer,
    },
});
