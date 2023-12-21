import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  removeItemFromCart,
  resetShippingCost,
} from "./cartUtils";
import { SHIPPING_COST } from "../../utils/consts";

const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    },
    removeFromCart: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
        shippingCost: resetShippingCost(state.cartItems, SHIPPING_COST),
      };
    },
    clearCart: (state) => {
      return {
        ...state,
        cartItems: [],
        shippingCost: 0,
      };
    },
    toggleCartHidden: (state) => {
      return {
        ...state,
        hidden: !state.hidden,
      };
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleCartHidden } =
  cartSlice.actions;

export default cartSlice.reducer;
