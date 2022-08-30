import { useState } from "react";
import EmployeeList from "./components/EmployeeList";

import NewEmployee from "./components/NewEmployee";





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
      
      <NewEmployee submitNewEmployee={submitNewEmployee}/>
      <EmployeeList employeeList={employees} removeEmployee={removeEmployee} updateEmployee={updateEmployee}/>

    </div>
  )
}

export default App;