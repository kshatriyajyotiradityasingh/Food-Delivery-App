import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import totalPriceReducer from "./PriceSlice";

const appStore = configureStore({
  reducer: {
    cart: cartReducer,
    totalPrice: totalPriceReducer,
  },
});

export default appStore;
