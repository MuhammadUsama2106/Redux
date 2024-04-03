import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice.js";

const store = configureStore({
  reducer: {
    sssss: userSlice,
  },
});

export default store;
