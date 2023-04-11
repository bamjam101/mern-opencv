import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setInLocalStorage } from "../utlis";

const initialState = {
  profile: getFromLocalStorage("PROFILE") || null,
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setProfile: (state, profile) => {
      state.profile = profile.payload;
      setInLocalStorage("PROFILE", state.profile);
    },
    setLogout: (state) => {
      state.profile = null;
    },
  },
});

export const { setProfile, setLogout } = globalSlice.actions;

export default globalSlice.reducer;
