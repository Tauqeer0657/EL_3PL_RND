import { createSlice } from "@reduxjs/toolkit";
import { createPlant, fetchPlantData } from "./plantAction";



export const plantSlice = createSlice({
  name: 'plant',
  initialState: {
    plantData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPlantData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPlantData.fulfilled, (state, action) => {
        state.loading = false;
        state.plantData = action.payload;
      })
      .addCase(fetchPlantData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })


      .addCase(createPlant.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPlant.fulfilled, (state, action) => {
        state.loading = false;
      })
      .addCase(createPlant.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const selectPlant = (state) => state.plant.plantData;
export const selectPlantLoading = (state) => state.plant.loading;
export const selectPlantError = (state) => state.plant.error;

export default plantSlice.reducer;
