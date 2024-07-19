import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPoDetails = createAsyncThunk(
  "poDetails/fetchPoDetails",
  async () => {
    try {
      const response = await axios.get('/api/poDetails/getAllPoDetails');
      const data = response.data.reverse();
      console.log(data, "data po")
      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);

export const createPoDetails = createAsyncThunk(
  "poDetails/createPoDetails",
  async (poDetails) => {
    try {
      const response = await axios.post('/api/poDetails/addPoDetails', poDetails);
      const data = response.data.reverse();
      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
