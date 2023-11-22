import React from 'react';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button,TextField} from '@mui/material';
import { useContext,useState,useCallback } from 'react';
import { IDataContext,DataContext } from './DataContext';
import {User} from './Types';

interface IDialogProps {
    open:boolean,
    setOpen:(value:boolean) => void
}

export default function NewConversationDialog({open,setOpen}:IDialogProps){

    const {me,users,postDiscussion} = useContext(DataContext) as IDataContext
    const [subject,setSubject] = useState<string>("New Topic");
    const [participants,setParticipants] = useState<(User)[]>([me as User]); //by that point I know 'me' exsits...
    const [sending,setSending] = useState<boolean>(false);

    const handleFailedSend = () => console.log('placeholder to handle failed send');

    const handleCreate = useCallback(async () => {
        if(subject.length>0 && participants.length>1){
          setSending(true);
          postDiscussion(participants,subject)
          .then(() => {setSending(false);setOpen(false);})
          .catch(handleFailedSend);
          
        }
    },[subject,participants]);

    return(
        <Dialog open={open}>
            <DialogTitle>Create New Conversation</DialogTitle>
            <DialogContent>
                <DialogContentText>daskldjasldksjad</DialogContentText>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button variant="contained"
                    onClick={handleCreate}>Create</Button>
                </DialogActions>

            </DialogContent>




        </Dialog>

    )


}