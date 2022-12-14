import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (value: object[]) => {
  try {
    await AsyncStorage.setItem('@data', JSON.stringify(value))
  } catch (e) {
    console.log(e)
  }
}

const initialState: [] = []

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    hydrate: (state:any, action:any) => action.payload,
    addToCart(state: any, { payload }: any) {
      state.push(payload);
      storeData(state);
    },
    clear(state: any): any {
      return [];
    },
  },
});

export const { addToCart, clear, hydrate } =
  cartSlice.actions;
const card = cartSlice.reducer;

export default card;