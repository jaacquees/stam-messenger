import * as React from 'react';
import {AppBar,Box,Toolbar,Typography,Button,Avatar} from '@mui/material';
import DiscussionList from './DiscussionList';
import DiscussionDetail from './DiscussionDetail';
import {User,Message,Discussion} from './Types';

import {me} from './data';
export default function App() {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Avatar src={me.avatarUrl}/>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {me.name}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
    <Box display="flex" width="100vw" height="calc(100vh - 64px)" border="3px pink dashed">
      <Box width="30vw" overflow="hidden" sx={{overflowY:"scroll"}}><DiscussionList/></Box>
      <Box flexGrow="1"  overflow="hidden" sx={{overflowY:"scroll"}}><DiscussionDetail/></Box>
    </Box>
  </Box>
  
  
  );
}
