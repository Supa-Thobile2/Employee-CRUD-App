// import { TableBody } from "@mui/material";
// import { Row } from "react-bootstrap";

import React from 'react'



    
const TableHeader = () =>{
    return(
        <div>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Remove</th>
                    <th>Update</th>
                </tr>
            </thead>
        </div>
    )
}
    



const TableBody = props =>{
    const rows = props.employeeList.map((row, index)=>{
        return(
            <tr>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td><button onClick={()=>props.deleteEmployee(index)}>Delete</button></td>
                <td><button onClick={()=>props.updateEmployee(index)}>Update</button></td>
            </tr>
            
        );
    });

    return <tbody>{rows}</tbody>

};

const EmployeeList = (props)=>{

    const {employeeList, removeEmployee} = props;
        return(
            <div>
                <table>
                    <TableHeader></TableHeader>
                    <TableBody employeeList={employeeList} deleteEmployee={removeEmployee}></TableBody>
                </table>
                
            </div>
            
        )

}





export default EmployeeList;




