import { configureStore } from "@reduxjs/toolkit";
import vendorReducer from "../features/vendors/vendorSlice";
import vendorLocationReducer from "../features/vendorLocation/vendorLocationSlice"; 
import plantReducer from "../features/plants/plantSlice";
import PoDetailsReducer from "../features/POdetails/PoSlice";
import userCreationReducer from '../features/userCreation/userCreationSlice';


export const store = configureStore({
  reducer: {
    vendor: vendorReducer,
    vendorLocation: vendorLocationReducer,
    plant: plantReducer,
    PoDetails: PoDetailsReducer,
    userCreation: userCreationReducer,
  },
});


