import React from "react"
import {Box} from '@mui/material';

//this component is just a div that takes all the space available and
// centers its child vertically and horizontally within itself

export default function Center({children}:{children:any}){
    return(
        <Box
        display="flex"
        alignItems="center"
        minHeight="100%"
        justifyContent="center">
            {children}
        </Box>
    )
}