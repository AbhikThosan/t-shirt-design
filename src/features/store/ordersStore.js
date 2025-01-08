import { configureStore } from "@reduxjs/toolkit";
import { apiOrdersSlice } from "../slices/apiOrdersSlice";

const ordersStore = configureStore({
  reducer: {
    [apiOrdersSlice.reducerPath]: apiOrdersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiOrdersSlice.middleware),
});

export default ordersStore;
