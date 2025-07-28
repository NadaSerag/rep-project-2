import { createSlice } from '@reduxjs/toolkit';

//the state:
//The actual data this slice manages (the array and the count)

const firstProduct = { id: 1, name: 'React Manager', description: 'Manage React projects' };

const initialState = {
  array: [firstProduct],
  count: 1,
};


export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.array.push(action.payload); // action.payload is the item we pass
      state.count++;
      // id for the project to add
      action.payload.id = state.count;
      state.count = state.array.length;
    },
    removeProduct: (state, action) => {
      // action.payload is the id of the item to remove
      state.array = state.array.filter(project => project.id !== action.payload);
      state.count = state.array.length;
    },

    editProduct: (state, action) => {
      //action.payload is the project with the new info, just same id,
      //so we find its place in the array (its index) by the id
      //then we change the other info manually
      const index = state.array.findIndex(project => project.id === action.payload.id);
      state.array[index].name = action.payload.name;
      state.array[index].description = action.payload.description;
    }
  },
});

// Export the "actions" - functions that will be dispatched to trigger a reducer
export const { addProduct, removeProduct, editProduct } = productsSlice.actions;

// Export the reducer to be used in the store
export default productsSlice.reducer;