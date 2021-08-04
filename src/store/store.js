import {configureStore} from "@reduxjs/toolkit";
import navReducer from '../feature/navSlice';

export default configureStore({
    reducer: {
        nav: navReducer
    },
});
