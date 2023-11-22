import * as React from 'react';
import { useContext,useState,useEffect } from 'react';
import {AppBar,Box,Toolbar,Typography,Button,Avatar, CircularProgress,Stack,Drawer,IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';
import DiscussionList from './components/DiscussionList';
import DiscussionDetail from './components/DiscussionDetail';
import { DataContext,IDataContext } from './contexts/DataContext';
import Center from './components/Center';
import NewConversationDialog from './components/NewConversationDialog';


export default function App() {

  const [dialogOpen,setDialogOpen] = useState<boolean>(false);
  const {me,users,fetchMe,fetchUsers,fetchDiscussions} = useContext(DataContext) as IDataContext;
  const [drawerOpen,setDrawerOpen] = useState(true);
  useEffect(() =>{
    fetchMe();
    fetchUsers();
    fetchDiscussions();
  },[]);

  const handleDrawerToggle = () => setDrawerOpen(x => !x);

  return (
    <>
    {me?
    <Stack height="100vh">
    <AppBar position="static">
      <Toolbar>
        <IconButton onClick={()=>setDrawerOpen(true)}><Menu/></IconButton>
        <Avatar src={me.avatarUrl}/>
        <Typography variant="h6">
          {me.name}
        </Typography>
        <Typography fontSize={"5vw"} component="div" flexGrow={1} align="center">Stam Messenger</Typography>
        <Button 
          disabled={!users}
          variant="contained"
          color="secondary"
          onClick={()=>setDialogOpen(true)}>
            New
        </Button>
      </Toolbar>  
    </AppBar>
    <Box flexGrow={1}>
    <Drawer 
      open={drawerOpen}
      onClose={handleDrawerToggle}
      variant={{sm:"temporary",lg:"permanent"}}><DiscussionList toggleDrawer={handleDrawerToggle}/></Drawer>
     
      <DiscussionDetail/>
      </Box>
    </Stack>
    :
    <Box height="100vh"><Center><CircularProgress/></Center></Box>}
    <NewConversationDialog open={dialogOpen} setOpen={setDialogOpen}/>
  </>
  
  );
}
