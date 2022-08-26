// import { TableBody } from "@mui/material";
// import { Row } from "react-bootstrap";

import React from 'react'

function EmployeeList(){

    
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
    
};


const TableBody = props =>{
    const rows = props.employeeList.map((row)=>{
        return(
            <tr>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td><button>Delete</button></td>
            </tr>
            
        );
    });

    return <tbody>{rows}</tbody>

};



// const {EmployeeList} = props;
// return(
//     <div>
//         <table>
//             <TableHeader></TableHeader>
//             <TableBody EmployeeList={EmployeeList}></TableBody>
//         </table>
        
//     </div>
    
// )



export default EmployeeList;




