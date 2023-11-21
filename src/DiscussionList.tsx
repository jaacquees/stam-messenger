import * as React from 'react';
import { useContext } from 'react';
import { ListItem, Avatar,List,ListItemAvatar,ListItemText,Divider, Typography, CircularProgress} from '@mui/material';
import {Discussion,User} from './Types';
import { DataContext } from './DataContext';

interface IDiscussionListItemProps{
  discussion:Discussion
}

export default function DiscussionList() {

  
const {discussions} = useContext(DataContext);

  function DiscussionListItem({discussion}:IDiscussionListItemProps){
      const lastMessage = discussion.messages[discussion.messages.length -1];
      return(
        <>
        <ListItem>
          <ListItemAvatar>
            <Avatar src={lastMessage.sender.avatarUrl} />
          </ListItemAvatar>
          <ListItemText 
            primary={discussion.subject}
            secondary={<>{lastMessage.sender.name}<Typography margin={2} variant="caption">{`${lastMessage.body.substring(0,20)}...`}</Typography></>}
/>
        </ListItem>
        <Divider/>
        </>
      )
  }


  return (
   <List>
    {discussions ?
    discussions.map(dsc => <DiscussionListItem discussion={dsc}/>)
    :
    <CircularProgress/>}
   </List>
  );
}
