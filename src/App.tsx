import * as React from 'react';
import { useContext,useState,useEffect } from 'react';
import {AppBar,Box,Toolbar,Typography,Button,Avatar, Popover,CircularProgress,Stack,Drawer,IconButton} from '@mui/material';
import {Menu} from '@mui/icons-material';
import DiscussionList from './components/DiscussionList';
import DiscussionDetail from './components/DiscussionDetail';
import { DataContext,IDataContext } from './contexts/DataContext';
import Center from './components/Center';
import NewConversationDialog from './components/NewConversationDialog';
import { ifTightScreen,ifWideScreen,listWidth } from './constants';

export default function App() {

  const [dialogOpen,setDialogOpen] = useState<boolean>(false);
  const {me,discussions,users,fetchMe,fetchUsers,fetchDiscussions} = useContext(DataContext) as IDataContext;
  const [drawerOpen,setDrawerOpen] = useState(false);
  const [popoverOpen,setPopoverOpen] = useState<Element|null>(null);
  
  useEffect(() =>{
    fetchMe();
    fetchUsers();
    fetchDiscussions();
  },[]);

  const handleDrawerToggle = () => setDrawerOpen(x => !x);

  const UserPopOver = () => {
    return <Popover open={!!popoverOpen} 
                    onClose={() => setPopoverOpen(null)}
                    anchorOrigin={{horizontal:"center",vertical:"bottom"}}
                    anchorEl={popoverOpen}
                    >
                  <Box padding={2}>
                      <Typography variant="h6">
                        {me?.name}
                      </Typography>
                      <Typography variant="caption">
                        {me?.email}
                      </Typography>
                  </Box>
            </Popover>
  }

  return (
    <>
    {(me && discussions) ?
    <Stack height="100vh" marginLeft={{xs:0,sm:0,md:listWidth,lg:listWidth,xl:listWidth}}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
        onClick={()=>setDrawerOpen(true)}
        sx={{display:ifTightScreen}}><Menu/></IconButton>
        <Avatar src={me.avatarUrl} onClick={(e) => setPopoverOpen(e.target as Element)}/>
        <UserPopOver/>
        <Typography variant="h6" component="div" flexGrow={1} align="center">Stam Messenger</Typography>
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
      variant="temporary"
      sx={{display:ifTightScreen}}>
        <DiscussionList toggleDrawer={handleDrawerToggle} listWidth={listWidth}/>
      </Drawer>
      <Drawer 
      open={drawerOpen}
      onClose={handleDrawerToggle}
      variant="permanent"
      sx={{display:ifWideScreen}}>
        <DiscussionList toggleDrawer={handleDrawerToggle} listWidth={listWidth}/>
      </Drawer>
      <DiscussionDetail/>
      </Box>
    </Stack>
    :
    <Box height="100vh"><Center><CircularProgress/></Center></Box>}
    <NewConversationDialog open={dialogOpen} setOpen={setDialogOpen}/>
  </>
  
  );
}
