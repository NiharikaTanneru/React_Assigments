import axios from 'axios';
import React, { useState } from 'react'

export default function SearchEmployee() {
    const [searchTerm, setSearchTerm] = useState('')
    const [employee, setEmployee] = useState([])
    const [flag, setFlag] = useState(false)

    const handleClick = () => {
        axios.get(" http://localhost:4000/employeeDetails").then((res) => {
            console.log(res.data)
            const emp = [];
            emp.push(res.data.filter(emp => {
                if (emp.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return emp;
                }
                else if (emp.dept.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return emp
                }
                else if (emp.sal.toString().includes(searchTerm.toString())) {
                    return emp
                }

            }))
            console.log(emp)
            setEmployee(emp[0])
            setFlag(true)
        });
    }
    console.log(employee)
    return (
        <div className='search'>
            <div>
                <input type='text' onChange={e => setSearchTerm(e.target.value)} placeholder='Search' />
                <button onClick={handleClick}>Search</button>
            </div>
            {flag &&
                employee.map(emp =>
                    <div className='resultDiv'>
                        <p> Name :<span>{emp.name}</span>  </p>
                        <p>Email :<span> {emp.email}</span> </p>
                        <p>Designation: <span>{emp.desg}</span> </p>
                        <p>Department: <span>{emp.dept}</span> </p>
                        <p>Salary : <span>{emp.sal} </span></p>
                    </div>
                )
            }

        </div>
    )
}