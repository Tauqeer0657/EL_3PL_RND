import { createSlice } from "@reduxjs/toolkit";
import { createVendor, deleteVendorData, fetchVendorData } from "./vendorAction";



export const vendorSlice = createSlice({
  name: 'vendor',
  initialState: {
    vendorData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchVendorData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchVendorData.fulfilled, (state, action) => {
        state.loading = false;
        state.vendorData = action.payload;
      })
      .addCase(fetchVendorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(createVendor.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createVendor.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createVendor.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      
      .addCase(deleteVendorData.pending, (state) => {
        state.loading = true;
        state.error = null; 
      })
      .addCase(deleteVendorData.fulfilled, (state, action) => {
        state.loading = false;
    
        state.vendorData = state.vendorData.filter(vendor => vendor.vendorCode !== action.payload.vendorCode);
      })
      .addCase(deleteVendorData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; 
      });
  },
});

export const selectVendor = (state) => state.vendor.vendorData;
export const selectVendorLoading = (state) => state.vendor.loading;
export const selectVendorError = (state) => state.vendor.error;

export default vendorSlice.reducer;
