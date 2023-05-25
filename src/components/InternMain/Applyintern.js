import React,{useState} from 'react'


import {
    Box, Grid,
    FilledInput,InputLabel,Input,TextField,Alert,Stack,
  Dialog, DialogTitle,
    DialogContent, DialogActions, 
    Button, IconButton
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'
import {styled} from '@mui/material/styles';
//import { useSaveProfileMutation } from '../../services/candidateProfileApi';


export default function Applyintern() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    
    
    const Input = styled('input')({
        display:'none',
    })
    //States
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const [pimage, setPimage] = useState('')
    const[rdoc,setRdoc]=useState('')
    const [error,setError]=useState({
        status:false,
        msg:"",
        type:""

    })
    // Clear Form
    const resetForm=()=>{
    setName('')
    setEmail('')
    setPimage('')
    setRdoc('')
    document.getElementById('resume-form').reset()
    }
    //RTK Query
    //const[SaveProfile]=useSaveProfileMutation()

    //Handle Form Submit
    const handleSubmit=(e)=>{
        e.preventDefault();
        const data =new FormData()
        data.append('name',name)
        data.append('email',email)
        data.append('pimage', pimage)
        data.append('rdoc',rdoc)
        console.log(data)
        if(name && email){
         //  const res=SaveProfile(data)
         //  console.log(res)
            setError({
                status:true,
                msg:"Resume Uploaded Successfully",
                type:'success'})
                resetForm()
           
        } else{
            setError({
                status:true,
                msg:"All Fields are Required",
                type:'error'})
            

        }
    }

    
    return (
        <div  >
            <Button variant="contained" color='primary' disableElevation onClick={handleOpen}>Apply  </Button>
            <Dialog 
                open={open}
                fullWidth
            >
                <>
                    <DialogTitle >
                        <Box display="flex" justifyContent="space-between" alignItems="center" >
                            Apply with resume
                            <IconButton>
                                <CloseIcon onClick={handleClose} />
                            </IconButton>
                        </Box>
                    </DialogTitle>
                            
                    
      <Grid container justifyContent="center">

        <Grid item xs={10}>
          <Box component="form" sx={{ p: 5}} noValidate id="resume-form" onSubmit={handleSubmit}>
            <TextField id="name" name="name" required fullWidth margin='normal' 
            label='Name' onChange={(e) => setName(e.target.value)} />
            <TextField id="email" email="email" required fullWidth margin='normal'
             label='Email' onChange={(e) => setEmail(e.target.value)} />
              <Stack direction="row" alignItems="center" spacing={4} >
              <label htmlFor='profile-photo'>
                <Input accept="image/*" id="profile-photo" type="file" 
                onChange={(e) => { setPimage(e.target.files[0]) }} />
                <Button variant='contained' component='span'>Upload Photo </Button>
              </label>
              <label htmlFor="resume-file">
                <Input accept="doc/*" id="resume-file" type="file"
                 onChange={(e) => { setRdoc(e.target.files[0]) }} />
                <Button variant="contained" component="span">Upload Resume</Button>
              </label>
            </Stack>
            <Button type='submit' variant='contained' sx={{ mt: 2, mb: 2, px: 5 }} 
            color="error" justifyContent="center">Submit</Button>
            {error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ''}
          </Box>
        </Grid>
            
                    </Grid>
                   
                    
                    
                   

                </>
                
            </Dialog>
            
        </div>
    )
}