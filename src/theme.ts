import { createTheme } from '@mui/material/styles';
import { red, grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode:'light',
    primary: {
      main: '#ffc107'
    },
    secondary: {
      main: '#ff3d00'
    },
    info: {
      main: '#999999',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
