import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  first_name: "",
  last_name: "",
  email: "",
  gender: "",
  avatar: "",
  domain: "",
  available: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      return { ...state, ...action.payload };
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const userAction = userSlice.actions;
export const store = configureStore({
  reducer: userSlice.reducer,
});
