import React from 'react';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button,TextField} from '@mui/material';
import { useContext,useState,useCallback,useEffect } from 'react';
import { IDataContext,DataContext } from './DataContext';
import {User} from './Types';

interface IDialogProps {
    open:boolean,
    setOpen:(value:boolean) => void
}

export default function NewConversationDialog({open,setOpen}:IDialogProps){

    const {me,users,postDiscussion} = useContext(DataContext) as IDataContext
    const [subject,setSubject] = useState<string>("New Topic");
    const [body,setBody] = useState<string>("");
    const [participants,setParticipants] = useState<(User)[]>([]);
    const [sending,setSending] = useState<boolean>(false);


    useEffect(() => {
        if(me)
            setParticipants(v => [...v,me]);
    },[]);

    const handleFailedSend = () => console.log('placeholder to handle failed send');

    const handleCreate = useCallback(() => {
        
        if(subject.length>0 && participants.length>0){
            
          setSending(true);
          postDiscussion(participants,subject,body)
          .then(() => {setSending(false);setOpen(false);})
          .catch(handleFailedSend);
        }
    },[subject,participants]);

    return(
        <Dialog open={open}>
            <DialogTitle>Create New Conversation</DialogTitle>
            <DialogContent>
                <DialogContentText>{sending? "sending" : ""}</DialogContentText>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button variant="contained"
                    onClick={handleCreate}>Create</Button>
                </DialogActions>

            </DialogContent>




        </Dialog>

    )


}