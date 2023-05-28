import React from 'react';
import {Box,Button,Select,MenuItem} from  "@mui/material"




    

export default props=> {
    

    return(
        
        
        
    
        
        <Box p={2} mt={-5} mb={2}  >
        <div className='wrapper'>
        
        <div className='a'>
            <Select disableUnderline variant="filled" defaultValue="Full time">
                <MenuItem value="Full time">Full time</MenuItem>
                <MenuItem value="Part time">Part time</MenuItem>
                <MenuItem value="Contract">Contract</MenuItem>
            </Select>
            </div>
            <div className='b'>
        
            <Select disableUnderline variant="filled" defaultValue="Remote">
                <MenuItem value="Remote">Remote</MenuItem>
                <MenuItem value="In-office">In-office jobs</MenuItem>
                </Select>
                </div>
                <div className='c'>
        
                <Button variant="contained" color='primary' disableElevation>
                Search
                </Button>
                </div>
                
           </div> 
        </Box>
    
        
        
    );

}