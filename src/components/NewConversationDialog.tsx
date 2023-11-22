import React from 'react';
import {Dialog,DialogTitle,DialogContent,DialogContentText,DialogActions,Button,TextField,Stack} from '@mui/material';
import { useContext,useState,useCallback,useEffect } from 'react';
import { IDataContext,DataContext } from '../contexts/DataContext';
import {User} from '../Types';
import UserMultiSelect from './UserMultiSelect';

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

    const handleFailedSend = () => console.log('placeholder to handle failed send');

    useEffect(()=>{
        if(!open){
            handleClear();
        }
    },[open]);

    const handleClear = useCallback(()=>{
        console.log("he ho");
        setSubject("New Topic");
        setParticipants([]);
        setBody("");
    },[])

    const handleCreate = useCallback(() => {
        
        if(subject.length>0 && participants.length>0 && me){
            
          setSending(true);
          postDiscussion([...participants,me],subject,body)
          .then(() => {setSending(false);setOpen(false);})
          .catch(handleFailedSend);
        }
    },[subject,participants,body]);

    return(
        <Dialog open={open} onClose={()=>console.log("yes!!")}>
            <DialogTitle width="50vw">Create New Conversation</DialogTitle>
            <DialogContent>
                
                    <Stack spacing={1} padding={1}>
                    <TextField 
                    fullWidth
                    label="Topic"
                    value={subject}
                    onChange={(e)=> setSubject(e.target.value)}/>

                    <UserMultiSelect
                    users={users?.filter(u => u.email !== me?.email) as User[]} //sending the user list except me (i will automatically be included in this conversation)
                    participants={participants} setParticipants={setParticipants}/>

                    <TextField
                    fullWidth
                    multiline
                    size="small"
                    minRows={3}
                    maxRows={3}
                    label="Message"
                    value={body}
                    onChange={(e)=>setBody(e.target.value)}/>
                    </Stack>

                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button variant="contained"
                    onClick={handleCreate}>Create</Button>
                </DialogActions>

            </DialogContent>




        </Dialog>

    )


}