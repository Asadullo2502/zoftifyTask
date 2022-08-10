import { configureStore } from "@reduxjs/toolkit";
import card from "./features/card";


const store = configureStore({
  reducer: {
    cart: card,
  },
});

export default store