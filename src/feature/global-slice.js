import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, setInLocalStorage } from "../utlis";

const initialState = {
  mode: getFromLocalStorage("MODE") || "dark",
  profile: getFromLocalStorage("PROFILE") || {},
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setMode: (state) => {
      state.mode = state.mode === "light" ? "dark" : "light";
      setInLocalStorage("MODE", state.mode);
    },
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
