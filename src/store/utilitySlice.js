import { createSlice } from "@reduxjs/toolkit";

const utilitySlice = createSlice({
  name: "utility",
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setError } = utilitySlice.actions;
export default utilitySlice.reducer;
