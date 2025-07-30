// src/theme/lightTheme.js
import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f5f5f524',
      paper: '#ffffff3e',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#555555',
    },
    primary: {
      main: '#1976d2', // blue
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#ff9800', // orange
      contrastText: '#000000',
    },
  },
});

export default lightTheme;
