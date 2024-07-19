// src/features/vendorLocation/vendorLocationAction.js
import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

// Fetch vendor location data
export const fetchVendorLocationData = createAsyncThunk(
  "vendorLocation/fetchVendorLocationData",
  async () => {
    try {
      const response = await axios.get('/api/vendorLocation/getVendorLocation');
      return response.data.reverse();
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

// Add vendor location
export const addVendorLocation = createAsyncThunk(
  "vendorLocation/addVendorLocation",
  async (vendorLocation) => {
    try {
      const response = await axios.post('/api/vendorLocation/addVendorLocation', vendorLocation);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);


//delete function

// export const deleteVendorLocationData = createAsyncThunk (
//   "vendorLocation/deleteVendorLocationData",
//   async (vendorLocationCode) => {
//     try {
//       const url 
//     }
//   }
// ) 