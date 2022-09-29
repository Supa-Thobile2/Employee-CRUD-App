import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

 const UpdateModal = (props)=>{
    
        const [open, setOpen] = React.useState(false);

        const handleClickOpen = () => {

            console.log(props)
          setOpen(true);
        };
      
        const handleClose = () => {
          setOpen(false);
        };


        return (
            <div>
              <Button variant="outlined" onClick={handleClickOpen}>
                Update
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Update</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                  </DialogContentText>
                    <label >Name:</label>
                    <input type ="text" name="name" id="name"/>

                    <label >Email:</label>
                    <input type ="email" name="email" id="email"/>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>Cancel</Button>
                  <Button onClick={handleClose}>Update</Button>
                </DialogActions>
              </Dialog>
            </div>
          );
        }
    
        export default UpdateModal