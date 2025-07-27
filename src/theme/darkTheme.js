// src/theme/darkTheme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#140f0fff',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
    primary: {
      main: '#90caf9', // light blue
      contrastText: '#000000',
    },
    secondary: {
      main: '#f48fb1', // pink
      contrastText: '#000000',
    },
  },
});

export default darkTheme;
