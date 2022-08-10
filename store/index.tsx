import { configureStore } from "@reduxjs/toolkit";
import card from "./features/card";


// import productsReducer from "./productsSlice";
// import uiReducer from "./uiSlice";

const store = configureStore({
  reducer: {
    cart: card,
  },
});

export default store