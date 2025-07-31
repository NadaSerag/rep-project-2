import { tooltipClasses } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  array: [], 
  //arrayShownToUser: [],
  count: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.array.push(action.payload); // action.payload is the item we pass
      //state.arrayShownToUser.push(action.payload);
      state.count = state.array.length;

      //adding up the prices
      state.totalPrice += action.payload.price;
    },
    removeFromCart: (state, action) => {
      // action.payload is the id of the item to remove
      state.array = state.array.filter(item => item.id !== action.payload);
    //  state.array = state.arrayShownToUser.filter(item => item.id !== action.payload);
      state.count = state.array.length;

      const product = state.array.find((product) => product.id === action.payload);
      //subtracting the price of the removed product
      state.totalPrice -= product.price;
    },
    

    setCart: (state, action) => {
          //action.payload is the NEW CART ARRAY, the array of cart objects (fetched from API)
          state.array = action.payload;
          state.count = state.array.length;
          for (let i = 0; i < state.count; i++) {
          state.totalPrice += state.array.price[i];
            }
    },

    deleteCart: (state) => {
        state.array = [];
        state.count = 0;
        state.totalPrice = 0;
    },
    
 
}});

export const { addToCart, removeFromCart, setCart, deleteCart } = cartSlice.actions;
export default cartSlice.reducer;