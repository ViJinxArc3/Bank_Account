import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./Account";

export default configureStore({
reducer: {
    account: accountReducer,
},
});