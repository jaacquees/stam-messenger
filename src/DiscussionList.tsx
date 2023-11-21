import * as React from 'react';
import { ListItem, Avatar,List,ListItemAvatar,ListItemText,Divider} from '@mui/material';



export default function DiscussionList() {


  function DiscussionListItem(){
      return(
        <>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="Joe Porcaro" />
          </ListItemAvatar>
          <ListItemText 
            primary="Discussion about guitar strings"
            secondary="Joe Porcaro"
/>
        </ListItem>
        <Divider/>
        </>
      )
  }


  return (
   <List>
    <DiscussionListItem/>
   </List>
  );
}
