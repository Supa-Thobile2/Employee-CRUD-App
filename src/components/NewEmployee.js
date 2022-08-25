function NewEmployee(){
    return(
        <div style = {{border: '1px solid #dedede', borderRadius: '20px', width: '80%', margin: '20px'}}>
            <label style = {{textAlign : 'center'}}>
                Add New Employee
            </label>

            <form>

                <label for = "Name"/>
                <input
                    type = "text"
                    name = "name"
                    id = "name"
                
                />

                <label for = "Email"/>
                <input
                    type = "email"
                    name = "email"
                    id = "email"
                
                />

                <button>ADD</button>


            </form>
         
            

        </div>
    )
}

export default NewEmployee;