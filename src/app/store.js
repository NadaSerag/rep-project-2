import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice.js';
import productsReducer from '../features/products/productsSlice.js';
import themeReducer from '../features/themes/themeSlice.js';

export const store = configureStore({
  //configureStore will take an object as a parameter,
  //add reducers
  reducer: {
    //key-value pairs
    //Slice name : reducer function for that slice
    products: productsReducer,
    cart: cartReducer,
    themes: themeReducer,
  },
});