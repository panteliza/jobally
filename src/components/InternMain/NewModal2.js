import React from 'react'
import Modal from '@mui/material/Modal';

import {
    Box, Grid,
    FilledInput,
    Select, MenuItem, Dialog, DialogTitle,
    DialogContent, DialogActions, styled,
    Typography, Button, IconButton
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

const useStyles = styled((theme) => ({
    skillChip: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.75),
        fontSize: "14.5px",
        borderRadius: "5px",
        trasition: ".3s",
        fontWeight: 600,
        border: `1px solid ${theme.palette.secondary.main}`,
        color: theme.palette.secondary.main,
        cursor: "pointer",

        '&:hover': {
            backgoundColor: theme.palette.secondary.main,
            color: "#dd33fa",

        }
    },
}))
export default function NewModal2() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const classes = useStyles();
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
            <Button variant="contained" color='primary' disableElevation onClick={handleOpen}>Post Internship </Button>
            <Dialog
                open={open}
                fullWidth
            >
                <>
                    <DialogTitle>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            Post Internship
                            <IconButton>
                                <CloseIcon onClick={handleClose} />
                            </IconButton>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Internship title*' disableUnderline fullWidth />
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
                                <FilledInput placeholder='Internship link*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={12}>
                                <FilledInput placeholder='Internship description*' disableUnderline fullWidth multiline rows={4} />
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
                            <Button variant="contained" disableElevation color="primary">Post Internship</Button>
                        </Box>
                    </DialogActions>
                </>
            </Dialog>
        </div>
    )
}