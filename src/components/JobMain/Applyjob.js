import React from 'react'


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
export default function Applyjob() {
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
            <Button variant="contained" color='primary' disableElevation onClick={handleOpen}>Apply  </Button>
            <Dialog
                open={open}
                fullWidth
            >
                <>
                    <DialogTitle>
                        <Box display="flex" justifyContent="space-between" alignItems="center">
                            Apply with resume
                            <IconButton>
                                <CloseIcon onClick={handleClose} />
                            </IconButton>
                        </Box>
                    </DialogTitle>
                    <DialogContent>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Enter First Name*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Enter Last Name*' disableUnderline fullWidth />
                            </Grid>
                            
                            <Grid item xs={6}>
                                <FilledInput placeholder='Enter Email Address*' disableUnderline fullWidth />
                            </Grid>
                            <Grid item xs={6}>
                                <FilledInput placeholder='Enter Phone Number*' disableUnderline fullWidth />
                            </Grid>
                            
                            
                            <Grid item xs={12}>
                            <Button variant="contained" disableElevation color="primary">Upload Resume</Button>
                            </Grid>
                            
                        </Grid>
                        
                    </DialogContent>
                    <DialogActions>
                        
                            
                            <Button variant="contained" disableElevation color="primary">Apply</Button>
                        
                    </DialogActions>
                </>
            </Dialog>
        </div>
    )
}