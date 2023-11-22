import * as React from 'react';
import { useContext } from 'react';
import {AppBar,Box,Toolbar,Typography,Button,Avatar, CircularProgress,Stack,} from '@mui/material';
import DiscussionList from './DiscussionList';
import DiscussionDetail from './DiscussionDetail';
import {User,Message,Discussion} from './Types';
import { DataContext,IDataContext } from './DataContext';
import Center from './Center';

export default function App() {

  const {me} = useContext(DataContext) as IDataContext;

  return (
    <>
    {me?
    <Stack height="100vh">
    <AppBar position="static">
       
      <Toolbar>
        <Avatar src={me.avatarUrl}/>

        <Typography variant="h6" flexGrow={1} component="div">
          {me.name}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>  
    </AppBar>
    <Box display="flex" width="100vw" flexGrow={1}>
      <Box width="30vw" minWidth={360} height="100%" overflow="auto"><DiscussionList/></Box>
      <Box flexGrow={1} bgcolor="rgba(200,200,200,0.5)"><DiscussionDetail/></Box>
    </Box>
    </Stack>
    :
    <Box height="100vh"><Center><CircularProgress/></Center></Box>}
  </>
  
  );
}
