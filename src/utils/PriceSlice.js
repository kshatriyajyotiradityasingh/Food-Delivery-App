import { createSlice } from "@reduxjs/toolkit";

const PriceSlice = createSlice({
  name: "totalPrice",
  initialState: {
    price: 0,
  },
  reducers: {
    addItemPrice: (state, action) => {
      state.price += action.payload / 100;
    },
    removeItemPrice: (state, action) => {
      state.price -= action.payload / 100;
    },
    clearPrice: (state) => {
      state.price -= state.price;
    },
  },
});

export const { addItemPrice, removeItemPrice, clearPrice } = PriceSlice.actions;

export default PriceSlice.reducer;
