import { useState } from "react";
import EmployeeList from "./components/EmployeeList";

import NewEmployee from "./components/NewEmployee";

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';





function App(){

  const [employees, setEmployees] = useState([
   

  ]);

  const removeEmployee = index =>{
    setEmployees([
      ...employees.slice(0, index),
      ...employees.slice(index +1, employees.length)
    ])
  }

  const updateEmployee = (index, updatedEmployee, handleClose)=>{
    setEmployees([
      ...employees.slice(0, index),
      updatedEmployee,
      ...employees.slice(index +1, employees.length)

    ])
    handleClose()
  }


  const submitNewEmployee = (newEmployee) =>{
    // console.log(newEmployee)
    setEmployees([
      ...employees,
      {
        name: newEmployee.name,
        email: newEmployee.email
      }
    ])
    
  }
  return(
          <div>

          <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <EmployeeList employeeList={employees} removeEmployee={removeEmployee} updateEmployee={updateEmployee}/>
                  </Grid>
                      
                  <Grid item xs={8}>

                    <NewEmployee submitNewEmployee={submitNewEmployee}/>
                    
                  </Grid>
                  
                  
                </Grid>

          </div>


    // <div>
      
    //   
    //   

    // </div>
  )
}

export default App;