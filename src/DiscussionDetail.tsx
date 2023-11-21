import * as React from 'react';
import { ListItem, Avatar,List,ListItemAvatar,ListItemText,Divider, Typography} from '@mui/material';
import { User,Message,Discussion } from './Types';
import {users,discussions} from './data';

interface IMessageViewProps{
  message:Message
}

export default function DiscussionDetail() {


  function MessageView({message}:IMessageViewProps){
      return(
        <>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt={message.sender.name} src={message.sender.avatarUrl} />
          </ListItemAvatar>
          <ListItemText 
            primary={<>{message.sender.name}<Typography variant="caption" color="secondary" margin={2}>{message.sent.toLocaleString()}</Typography></>}
            secondary={message.body}
          />
        </ListItem>
        </>
      )
  }


  return (
   <List>
    <MessageView message={discussions[0].messages[0]}/>
    <MessageView message={discussions[0].messages[1]}/>
    <MessageView message={discussions[0].messages[0]}/>
    <MessageView message={discussions[0].messages[1]}/>
   </List>
  );
}
