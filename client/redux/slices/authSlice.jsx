import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuth: false,
    user: [],
    favorites: [],
  },
  reducers: {
    login: (state) => {
      state.isAuth = true;
    },
    logout: (state) => {
      state.isAuth = false;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
  },
});

export const { login, logout, setUser, setFavorites } = authSlice.actions;
export default authSlice.reducer;
