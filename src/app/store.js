import { configureStore } from '@reduxjs/toolkit';
import taskReducer from '../features/tasks/taskSlice.js';
import productsReducer from '../features/products/productsSlice.js';
import themeReducer from '../features/themes/themeSlice.js';

export const store = configureStore({
  //configureStore will take an object as a parameter,
  //add reducers
  reducer: {
    //key-value pairs
    //Slice name : reducer function for that slice
    products: productsReducer,
    tasks: taskReducer,
    themes: themeReducer,
  },
});