import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  array: [], 
  //arrayShownToUser: [],
  count: 0
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.array.push(action.payload); // action.payload is the item we pass
      //state.arrayShownToUser.push(action.payload);
      state.count = state.array.length;
    },
    removeFromCart: (state, action) => {
      // action.payload is the id of the item to remove
      state.array = state.array.filter(item => item.id !== action.payload);
    //  state.array = state.arrayShownToUser.filter(item => item.id !== action.payload);
      state.count = state.array.length;
    },

    setCart: (state, action) => {
          //action.payload is the NEW CART ARRAY, the array of cart objects (fetched from API)
          state.array = action.payload;
          state.count = state.array.length;
      }
    
 
}});

export const { addToCart, removeFromCart, setCart } = cartSlice.actions;
export default cartSlice.reducer;