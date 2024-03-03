import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: {
    email: "",
    password: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
