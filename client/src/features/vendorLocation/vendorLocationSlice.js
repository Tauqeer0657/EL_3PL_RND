// src/features/vendorLocation/vendorLocationSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { addVendorLocation, fetchVendorLocationData } from "./vendorLocationAction";

export const vendorLocationSlice = createSlice({
  name: 'vendorLocation',
  initialState: {
    vendorLocationData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendorLocationData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVendorLocationData.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorLocationData = action.payload;
      })
      .addCase(fetchVendorLocationData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addVendorLocation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addVendorLocation.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorLocationData.push(action.payload);
      })
      .addCase(addVendorLocation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectVendorLocation = (state) => state.vendorLocation.vendorLocationData;
export const selectVendorLocationLoading = (state) => state.vendorLocation.loading;
export const selectVendorLocationError = (state) => state.vendorLocation.error;

export default vendorLocationSlice.reducer;
