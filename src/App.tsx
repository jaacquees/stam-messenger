import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,Avatar} from '@mui/material';
import DiscussionList from './DiscussionList';
import DiscussionDetail from './DiscussionDetail';

export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Avatar src="https://gravatar.com/avatar/6767d9badf28afc8d646049ee1112d3b?s=400&d=robohash&r=pg"/>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Box display="flex" width="100vw" height="90vh" border="1px red solid">
      <Box width="30vw"><DiscussionList/></Box>
      <Box flexGrow="1"  overflow="hidden" sx={{overflowY:"scroll"}}><DiscussionDetail/></Box>
    </Box>
  </Box>
  
  
  );
}
