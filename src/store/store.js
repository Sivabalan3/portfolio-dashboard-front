import { configureStore } from "@reduxjs/toolkit";
import authSlice from './features/authSlice';
import projectSlice from "./projectstores/projectSlice";
import userApiSlice from "./api/userApiSlice";

export const store = configureStore({
    reducer: {
        auth:authSlice,
        projects:projectSlice,
        users:userApiSlice,
    }
})