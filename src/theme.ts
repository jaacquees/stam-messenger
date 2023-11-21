import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#555ce6',
    },
    secondary: {
      main: '#18957b',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
