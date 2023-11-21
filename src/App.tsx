import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu'
import {AppBar,Box,Toolbar,IconButton,Typography,Link,Button,Container} from '@mui/material';
import SidePane from './SidePane';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Box display="flex" width="100%" height="100vh">
      <Box sx={{border:"2px red solid"}} width="20vw"><SidePane/></Box>
      <Box sx={{border:"2px red solid"}} flexGrow={1}>dadas</Box>
    </Box>
  </Box>
  
  
  );
}
