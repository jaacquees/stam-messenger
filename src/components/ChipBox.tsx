import React from "react";
import { TextField,MenuItem,Chip,Box } from "@mui/material";
import {styled} from '@mui/material/styles';

interface IChipBoxProps {
values:string[]
}


  const ChipContainer = styled(Box)(({theme}) => ({
    display:'flex',
   flexWrap: 'wrap',
   gap: 0.5  
  }));

  export default function ChipBox({values}:IChipBoxProps){

    return(
        <ChipContainer>
                    {values.map((value,key) => (
                      <Chip 
                      key={key}
                      label={value} />
                    ))}
                  </ChipContainer>
    )

  }