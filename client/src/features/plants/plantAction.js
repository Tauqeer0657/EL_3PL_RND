import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPlantData = createAsyncThunk(
  "plant/fetchPlantData",
  async () => {
    try {
      const response = await axios.get('/api/plant/getPlant');
      const data = response.data.reverse();
      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
 

export const createPlant = createAsyncThunk(
  "plant/createPlant",
  async (plantData) => {
    try {
      const response = await axios.post('/api/plant/addPlant', plantData);
      const data = response.data.reverse();
      return data;
    } catch (error) {
      return isRejectedWithValue(error);
    }
  }
);
