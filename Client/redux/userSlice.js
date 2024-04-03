import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userData: {},
};

const userSlice = createSlice({
  name: "name",
  initialState,
  reducers: {
    getUser: (state, action) => {
      console.log(action.payload);
      // state.first_name = action.payload.first_name;
      // state.last_name = action.payload.last_name;
      state.userData = action.payload;
      // state.password = action.payload.password;
    },
  },
});

export const { getUser } = userSlice.actions;
export default userSlice.reducer;
