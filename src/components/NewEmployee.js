import { useState } from "react";



const NewEmployee = props =>{

    const [employee, setEmployee] = useState({
        email:'fff',
        name:'eee'
    });

    const add = event =>{
        event.preventDefault();
        props.submitEmployee(employee)
    };

    
    const handleChange = (event) =>{
        event.preventDefault();
        setEmployee({
            ...employee,
            [event.target.name]:event.target.value
        })
    }

    return(
        <div style = {{border: '1px solid #dedede', borderRadius: '20px', width: '80%', margin: '20px'}}>
            <label style = {{textAlign : 'center'}}>
                Add New Employee
            </label>

            <form onSubmit={add}>

                <label for = "Name"/>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                    value ={employee.name}
                    onChange={handleChange}
                
                />

                <label for = "Email"/>
                <input
                    type = "email"
                    name = "email"
                    id = "email"
                    value ={employee.email}
                    onChange={handleChange}
                
                />

                <button>ADD</button>


            </form>
         
            

        </div>
    )
}

export default NewEmployee;