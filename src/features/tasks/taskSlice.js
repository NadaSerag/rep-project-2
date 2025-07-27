import { createSlice } from '@reduxjs/toolkit';

const firstTask = {
    id: 1, 
    title: "Task 1",
    associatedProject: "Default Project",
    status: "To Do",
    dueDate: "7/10/2025",
  };

const initialState = {
  array: [firstTask], 
  arrayShownToUser: [firstTask],
  count: 1
};

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.array.push(action.payload); // action.payload is the item we pass
      state.arrayShownToUser.push(action.payload);
      state.count = state.array.length;
    },
    removeTask: (state, action) => {
      // action.payload is the id of the item to remove
      state.array = state.array.filter(item => item.id !== action.payload);
      state.array = state.arrayShownToUser.filter(item => item.id !== action.payload);
      state.count = state.array.length;
    },

    filterByProject: (state, action) => {
      // action.payload is the project selected

      //the value registered when "--Select project--" itself is chosen is an empty string "", 
      if(action.payload !== "")
         state.arrayShownToUser = state.array.filter(item => item.associatedProject === action.payload);
     else //so if "--Select project--" is chosen, then we remove the filter and diaplay the whole, original array of tasks again.
           state.arrayShownToUser = state.array;
    },

    filterByStatus: (state, action) => {
       if(action.payload !== "")
         state.arrayShownToUser = state.array.filter(item => item.associatedProject === action.payload);
     else
           state.arrayShownToUser = state.array;
  },
}});

// Export the "actions" - functions that will be dispatched to trigger a reducer
export const { addTask, removeTask, filterByProject, filterByStatus } = taskSlice.actions;

// Export the reducer to be used in the store
export default taskSlice.reducer;