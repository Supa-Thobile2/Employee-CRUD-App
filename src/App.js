import logo from './logo.svg';
import './App.css';
import EmployeeList from './components/EmployeeList';
import NewEmployee from './components/NewEmployee'
import React, {useState} from 'react';
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


function App() {

  const [employees,setEmployees] = useState([
    {name: "Themba",surname: "Mqala", email:"2pac@saps.co.za"},
    {name: "Themba",surname: "nqala", email:"3pac@saps.co.za"},
    {name: "Themba",surname: "Pqala", email:"2pac@saps.co.za"}
    
  ]);

  const removeEmployees = index => {
    setEmployees([
      ...employees.slice(0, index),
      ...employees.slice(index +1 , employees.length)
    ])
  }

  const updateEmployee = index => {
      console.log(index)
  }


  const submitNewEmployee = (NewEmployee) => {

  }

  
  return (
    <Container>

      <div className="App">
        <NewEmployee submitNewEmployee={submitNewEmployee}/>
        <EmployeeList employeeList={employees} deleteEmployee={removeEmployees} updateEmployee={updateEmployee} />
      </div>

    </Container>
    
  );
}

export default App;
