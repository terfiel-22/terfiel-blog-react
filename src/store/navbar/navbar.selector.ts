import { RootState } from "../root-reducer";

export const selectIsNavbarOpen = (state: RootState) =>
  state.navbar.isNavbarOpen;
