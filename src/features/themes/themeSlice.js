import { createSlice } from '@reduxjs/toolkit';
import lightTheme from '../../theme/lightTheme';
import darkTheme from '../../theme/darkTheme';

const initialState = {
  theme: lightTheme,
  mode: "Light"
};


export const themeSlice = createSlice({
  name: 'themes',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      //ternary operator:
      //condition ? value_if_true : value_if_false;

     //toggling the mode and the theme
     state.mode = state.mode === 'Light' ? 'Dark' : 'Light';
     state.theme = state.mode === 'Light' ? darkTheme : lightTheme;
  },
}});


export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;