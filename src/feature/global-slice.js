import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setInLocalStorage } from "../utlis";

const initialState = {
  profile: getFromLocalStorage("PROFILE") || {},
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
      state.profile = {};
    },
  },
});

export const {
  setMode,
  setUser,
  setProfile,
  setUserRole,
  setAdmin,
  setLevels,
  setLoading,
  setLogout,
} = globalSlice.actions;

export default globalSlice.reducer;
