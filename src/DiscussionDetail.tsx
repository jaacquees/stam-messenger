import * as React from 'react';
import { useContext } from 'react';
import { ListItem, Avatar,List,ListItemAvatar,ListItemText,Divider, Typography, CircularProgress} from '@mui/material';
import { User,Message,Discussion } from './Types';
import { DataContext,IDataContext } from './DataContext';

interface IMessageViewProps{
  message:Message
}



export default function DiscussionDetail() {

const {activeDiscussion} = useContext(DataContext) as IDataContext;

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
    {activeDiscussion ?
    activeDiscussion.messages.map(
      (msg,k) => <MessageView key={k} message={msg}/>
      )
   :
   <CircularProgress/>
    }
    </List>
  );
}
