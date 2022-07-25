import React from "react"
import UpdateModal from "./UpdateModal";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Container from '@mui/material/Container';


const TableHeader = () =>{
    return(
        <Container fixed style={{paddingLeft:'100px', margin:'0 auto', width: '2000px', justifyItems:'center', alignContent:'center'}}>
             <div style={{border: '1px solid #dedede', borderRadius: '20px', width: '80%', margin: '20px' }}>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Email</th>
                <th>Remove</th>
                <th>Update</th>
            </tr>
        </div>

        </Container>
       
    )
}
const TableBody = props => {
    const rows = props.employeeList.map((row,index) => {
        return(

            <Container fixed style={{padding:'10px', margin:'0 auto', width: '2000px'}}>
                <div style={{border: '1px solid #dedede', borderRadius: '20px', width: '100%', margin: '0 auto', padding: '20px' }}>
                    <Container>

                        <tr>
                            <td>{row.name}</td>
                            <td>{row.surname}</td>
                            <td>{row.email}</td>
                            <td><Button variant="contained" onClick={() => props.deleteEmployee(index)}>Delete</Button></td>
                            <td><UpdateModal selectedEmployee = {row} index={index} ></UpdateModal></td>
                        </tr>

                    </Container>
                    
                </div>

            </Container>
            
        );
    });
    return <tbody>{rows}</tbody>;
}

const EmployeeList = (props) => {
    const {employeeList, deleteEmployee,updateEmployee} = props;
    return(
        <div>
            <TableHeader/>
            <TableBody employeeList={employeeList} deleteEmployee = {deleteEmployee} updateEmployee={updateEmployee}/>
        </div>
    )
}

export default EmployeeList