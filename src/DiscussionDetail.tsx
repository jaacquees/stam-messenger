import * as React from 'react';
import { useContext,useState,useCallback } from 'react';
import { ListItem, Avatar,List,ListItemAvatar,ListItemText,Divider,Card,Button,Box, Typography, Stack, TextField, CircularProgress} from '@mui/material';
import { User,Message,Discussion } from './Types';
import { DataContext,IDataContext } from './DataContext';
import Center from './Center';

interface IMessageViewProps{
  message:Message
}

export default function DiscussionDetail() {

  const {me,activeDiscussion,postMessage} = useContext(DataContext) as IDataContext;
  
  const [messageText, setMessageText] = useState<string>("");
  const [sending,setSending] = useState<boolean>(false);

  const handleClear = () => setMessageText("");
  
  const handleFailedSend = () => console.log("placeholder for handling of failed send...");

  const handleSend = useCallback(async () => {
      if(messageText.length>0 && me && activeDiscussion){
        setSending(true);
        await postMessage(me,activeDiscussion.id,new Date(),messageText)
        .then(() => setSending(false))
        .catch(handleFailedSend);
        handleClear();
      }

  },[messageText, me, postMessage]);

  //this is the boolean logic for disabling send button, disabling clear button
  const sendButtonEnabled = messageText.length>0 && !sending;
  const clearButtonEnabled = messageText.length>0 && !sending;


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

  // if an active discussion exists, display it as a List of "MessageView" components,
  // otherwise, display a centered message prompting a user to select a conversation,
  //or to create a new one

  return (
   <>
    {activeDiscussion?
    <Stack direction="column" height="100%">
      <Box m={1} borderRadius={2} bgcolor="white" height="calc(100vh - 150px - 80px)" overflow="auto">
      <List>
        {activeDiscussion.messages.map(  
         (msg,k) => <MessageView key={k} message={msg}/>
        )}
        <ListItem>
          <ListItemText hidden={!sending} secondary="Sending..."/>
        </ListItem>
      </List>
      </Box>
      <Stack spacing={2} padding={2} direction="row" m={1} borderRadius={2} bgcolor="white" >
        <TextField multiline
        fullWidth
        maxRows={3}
        minRows={3}
        value={messageText}
        label="type your message here"
        onChange={(e)=>setMessageText(e.target.value)}/>
        <Stack direction="column" spacing={1}>
          <Button onClick={handleSend} disabled={!sendButtonEnabled} variant="contained">Send</Button>
          <Button onClick={handleClear} disabled={!clearButtonEnabled} variant="outlined">Clear</Button>
        </Stack>
      </Stack>
    </Stack>
   :  <Center>
        <Typography variant="caption">
          Select a Conversation on the Left Pane, or Create a New Conversation
          </Typography>
        </Center>
    }
    
    </>
  );
}
