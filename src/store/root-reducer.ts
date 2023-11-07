import { combineReducers } from "@reduxjs/toolkit";
import { navbarReducer } from "./navbar/navbar.reducer";

export const rootReducer = combineReducers({
  navbar: navbarReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
