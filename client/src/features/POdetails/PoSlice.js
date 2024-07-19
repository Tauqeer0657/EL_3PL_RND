import { createSlice } from "@reduxjs/toolkit";
import { createPoDetails, fetchPoDetails } from "./PoAction";

export const PoSlice = createSlice({
  name: "PoDetails",
  initialState: {
    PoDetailsData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPoDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPoDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.PoDetailsData = action.payload;
      })
      .addCase(fetchPoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createPoDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPoDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.PoDetailsData = action.payload;
      })
      .addCase(createPoDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectPoDetails = (state) => state.PoDetails.PoDetailsData;
export const selectPoDetailsLoading = (state) => state.PoDetails.loading;
export const selectPoDetailsError = (state) => state.PoDetails.error;

export default PoSlice.reducer;
