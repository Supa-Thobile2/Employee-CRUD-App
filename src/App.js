import { useState } from "react";

import NewEmployee from "./components/NewEmployee";





function App(){

  const [employees, setEmployees] = useState([
    {name: 'james', email: 'james21@gmail.com'},
    {name: 'james', email: 'james21@gmail.com'},
    {name: 'james', email: 'james21@gmail.com'}

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
    console.log(newEmployee)
    
  }
  return(
    <div>
      
      <NewEmployee submitNewEmployee={submitNewEmployee}/>

    </div>
  )
}

export default App;