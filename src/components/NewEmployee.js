import React, {useState} from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormLabel, Typography } from '@mui/material';

const NewEmployee = props=> {

    const [employee, setEmployee] = useState({
        name: 'tyt',
        surname: 'ttt',
        email: 'ttt'
    })

    const add = event=>{
        event.preventDefault();
        props.submitEmployee(employee)
    }

    const handleChangeEvent = (event)=>{
        event.preventDefault();
        setEmployee({
            ...employee,
            [event.target.name]:event.target.value
        })
    }
    return(
        <Container >
            <div style={{border: '1px solid #dedede', borderRadius: '20px', width: '100%', margin: '20px'}}>
            <Container  style={{ witdth: '100px', padding:'100px', margin: '20px'}}>

                <FormLabel>
                    <label style={{margin: '0 auto'}}><Typography><h1>Add New Employee</h1></Typography></label><br/><br/>
                    
                    <TextField id="filled-basic"  label="Name" variant="outlined"  style={{width: '100%', margin: '10px'}} /><br></br>
                

                    
                    <TextField id="outlined-basic" label="Surname" variant="outlined"  style={{width: '100%', margin: '10px'}} /><br></br>

                    
                    <TextField id="outlined-basic" label="Email" variant="outlined"  style={{width: '100%', margin: '10px'}} /><br></br>

                    <TextField id="outlined-basic" label="Outlined" variant="outlined"  style={{width: '100%', margin: '10px'}} /><br></br>

                    <Button variant="contained"  style={{width: '100%', padding: '20px', margin: '10px'}}>ADD</Button>

                </FormLabel>


            </Container>


         
        </div>

        </Container>
        
    )
}

export default NewEmployee