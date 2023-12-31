import * as React from 'react';
import { useContext } from 'react';
import { ListItem, Box,Avatar,List,ListItemAvatar,ListItemText,ListItemButton,Divider, Typography, CircularProgress} from '@mui/material';
import {Discussion,User} from '../Types';
import { DataContext, IDataContext } from '../contexts/DataContext';

interface IDiscussionListItemProps{
  discussion:Discussion,
  toggleDrawer:()=>void
}

interface IDiscussionListProps{
  toggleDrawer:()=>void,
  listWidth:string
}

export default function DiscussionList({toggleDrawer,listWidth}:IDiscussionListProps) {
  
const {discussions,activeDiscussion,setActiveDiscussion} = useContext(DataContext) as IDataContext;

  function DiscussionListItem({discussion,toggleDrawer}:IDiscussionListItemProps){
      const lastMessage = discussion.messages[discussion.messages.length -1];
      return(
        <>
        <ListItem disablePadding>
          <ListItemButton 
          selected={activeDiscussion?.id === discussion.id}
          onClick={() => {setActiveDiscussion(discussion);toggleDrawer();}}>
          <ListItemAvatar>
            <Avatar src={lastMessage.sender.avatarUrl} />
          </ListItemAvatar>
          <ListItemText 
            primary={discussion.subject}
            secondary={<>{lastMessage.sender.name}<Typography margin={2} variant="caption">{`${lastMessage.body.substring(0,20)}...`}</Typography></>}
          />
        </ListItemButton>
        </ListItem>
        <Divider/>
        </>
      )
  }


  return (
      <List sx={{width:listWidth}}>
        {discussions?.map(dsc => <DiscussionListItem key={dsc.id} discussion={dsc} toggleDrawer={toggleDrawer}/>)}
      </List>
  );
}
