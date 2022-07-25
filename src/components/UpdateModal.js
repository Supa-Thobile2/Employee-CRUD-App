import React, {useState} from "react";

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';




const UpdateModal = (props)=>{   
    const [open, setOpen] = React.useState(false);
    const {selectedEmployee, index, update}= props
    const [newValue,setValue] = useState({
        name: selectedEmployee.name,
        surname: selectedEmployee.surname,
        name: selectedEmployee.email
    })

    const handleClickOpen = () => {
        console.log(selectedEmployee)
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event)=>{
        event.preventDefault();
        setValue({
            ...newValue,
            [event.target.name] : event.target.value
        })
    }

return (
  <div>
        <Button variant="contained" onClick={handleClickOpen}>
            Update
        </Button>
        <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update</DialogTitle>
        <DialogContent>
            <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
            </DialogContentText>
                <label for="name">Name</label>
           

                <input type="text" name="name" id="name" value={newValue.name} onChange={handleChange}/><br/><br/>

                <label for="surname">Surname</label>
                <input type="text" name="surname" id="surname"  value={newValue.surname} onChange={handleChange}/><br/><br/>

                <label for="email">Email</label>
                <input type="email" name="email" id="email" value={newValue.email} onChange={handleChange}/><br/><br/>

                
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={()=>update(index)}><link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons"/>Update</Button>
        </DialogActions>
        </Dialog>
  </div>
);
        
    

}

export default UpdateModal;