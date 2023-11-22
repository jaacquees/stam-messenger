import React from "react";
import { TextField,MenuItem,Chip,Box } from "@mui/material";
import {User} from '../Types';
import ChipBox from "./ChipBox";

interface IUserMultiSelectProps {
users:User[],
participants:User[],
setParticipants:(value:User[])=>void

}

export default function UserMultiSelect({users,participants,setParticipants}:IUserMultiSelectProps){

    return(

        <TextField 
                fullWidth
                select
                label="participants"
                SelectProps={{
                  multiple:true,
                 value:participants.map(p => p.email),
                 onChange:(t)=>setParticipants(users.filter(u => (t.target.value as string[]).includes(u.email))),
             
                renderValue: (selected) => <ChipBox
                    values = {(selected as string[]).map((value) => (
                      users.find(u=>u.email === value)?.name ?? "unknown")) as string[]}
                  />
                    }}>
                {users.map((u) => (
                  <MenuItem key={u.email} value={u.email}>
                    {u.name}
                  </MenuItem>
                ))}
              </TextField>

    )

}