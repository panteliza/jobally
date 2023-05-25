import React from 'react'


import {
    Box, Grid,
    FilledInput,
    Select, MenuItem, Dialog, DialogTitle,
    DialogContent, DialogActions, 
    Typography, Button, IconButton
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'


export default function NewModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    const skills = [
        "Javascript",
        "React",
        "Node",
        "Vue",
        "Firebase",
        "MongoDB",
        "SQL",
    ];
    return (
        <div>
            <Button variant="contained" color='primary' disableElevation onClick={handleOpen}>Post a job </Button>
            <Dialog
                open={open}
                fullWidth
            >
                <>
                    <DialogTitle>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            Post Job
                            <IconButton>
                                <CloseIcon onClick={handleClose} />
                            </IconButton>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Job title*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <Select fullWidth disableUnderline variant="filled" defaultValue="Full time">
                                    <MenuItem value="Full time">Full time</MenuItem>
                                    <MenuItem value="Part time">Part time</MenuItem>
                                    <MenuItem value="Contract">Contract</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Company name*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Company URL*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <Select fullWidth disableUnderline variant="filled" defaultValue="Remote">
                                    <MenuItem value="Remote">Remote</MenuItem>
                                    <MenuItem value="In-office">In-office</MenuItem>
                                </Select>
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Job link*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <FilledInput placeholder='Job description*' disableUnderline fullWidth multiline rows={4} />
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Typography>Skills</Typography>
                            <Box display="flex">
                            <div className='flex flex-wrap items-center mt-4 mx-4 pt-4 border-t
             border-gray-500
             border-solid
            sm:ml-auto sm:border-0 sm:pt-0 sm:mt-0'>
                {skills
                 ? skills.map((skill)=>(
                <span    className='cursor-pointer 
                 text-pink-600
                 bg-pink-200 font-bold
                  mr-4 mb-4 p-2 rounded
                  sm:mb-0'>
                    {skill}
                    </span>
                 ))
                 :''};
                    </div>
                            </Box>
                        </Box>
                    </DialogContent>
                    <DialogActions>
                        <Box color="red"
                            width="100%"
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Typography variant='caption'>*Required fields</Typography>
                            <Button variant="contained" disableElevation color="primary">Post job</Button>
                        </Box>
                    </DialogActions>
                </>
            </Dialog>
        </div>
    )
}