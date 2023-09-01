import {  configureStore } from "@reduxjs/toolkit";
import HomeSlice from "./feactures/HomeSlice";
import { userApi } from "./feactures/userApi";
export const store = configureStore({
  reducer : {
    home : HomeSlice,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware : (getDefaultMiddleware)=> getDefaultMiddleware().concat(userApi.middleware)
})