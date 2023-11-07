import { createSlice } from "@reduxjs/toolkit";

export type NavbarState = {
  readonly isNavbarOpen: boolean;
};

const NAVBAR_INITIAL_STATE: NavbarState = {
  isNavbarOpen: false,
};

export const navbarSlice = createSlice({
  name: "navbar",
  initialState: NAVBAR_INITIAL_STATE,
  reducers: {
    setIsNavbarOpen(state, action) {
      state.isNavbarOpen = action.payload;
    },
  },
});

export const navbarReducer = navbarSlice.reducer;
