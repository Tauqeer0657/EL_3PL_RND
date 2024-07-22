import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../axiosInstance";


// fetching vendor data
export const fetchVendorData = createAsyncThunk(
  "vendor/fetchVendorData",
  async () => {
    try {
      const response = await axios.get('/api/vendorMaster/getVendor');
      const data = response.data.reverse();
      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

// create vendor data
export const createVendor = createAsyncThunk(
  "vendor/createVendor",
  async (vendorData) => {
    try {
      const response = await axiosInstance.post('/api/vendorMaster/addVendor', vendorData);
      const data = response.data.reverse();
      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);


// deleting vendor data
export const deleteVendorData = createAsyncThunk(
  "vendor/deleteVendorData",
  async (selectedVendorCode) => {
    try {
      const url = `/api/vendorMaster/deleteVendor/${selectedVendorCode}`;
      const response = await axios.delete(url);
      return response.data;
    } catch (error) {
      return isRejectedWithValue(error.response.data);
    }
  }
);
