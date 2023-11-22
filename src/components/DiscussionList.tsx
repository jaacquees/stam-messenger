import * as React from 'react';
import { useContext } from 'react';
import { ListItem, Box,Avatar,List,ListItemAvatar,ListItemText,ListItemButton,Divider, Typography, CircularProgress} from '@mui/material';
import {Discussion,User} from '../Types';
import { DataContext, IDataContext } from '../contexts/DataContext';
import Center from './Center';

interface IDiscussionListItemProps{
  discussion:Discussion
}

export default function DiscussionList() {
  
const {discussions,activeDiscussion,setActiveDiscussion} = useContext(DataContext) as IDataContext;

  function DiscussionListItem({discussion}:IDiscussionListItemProps){
      const lastMessage = discussion.messages[discussion.messages.length -1];
      return(
        <>
        <ListItem disablePadding>
          <ListItemButton 
          selected={activeDiscussion?.id === discussion.id}
          onClick={() => setActiveDiscussion(discussion)}>
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
    <Box height="100%">
    {discussions ?
      <List>
    {discussions.map(dsc => <DiscussionListItem key={dsc.id} discussion={dsc}/>)}
    </List>
    :
    <Center><CircularProgress/></Center>}
    </Box>
  );
}
