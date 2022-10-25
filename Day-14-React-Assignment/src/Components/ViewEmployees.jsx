import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function ViewEmployees() {
  const [employeeDetails, setEmployeeDetails] = useState([])

  useEffect(() => {
    axios.get(" http://localhost:4000/employeeDetails").then((res) => {
        console.log(res.data)
        setEmployeeDetails(res.data);
    });
}, []);
  return (
    <div>
      {
        employeeDetails.length > 0 ? (<table className='table table-bordered'>
          <thead>
            <tr>
              
              <th>Name</th>
              
              <th>Email</th>
              <th>Designation</th>
              <th>Department</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {
              employeeDetails.map((emp) =>
                <tr key={emp.id}>
             
                  <td>{emp.name}</td>
                
                  <td>{emp.email} </td>
                  <td>{emp.desg} </td>
                  <td>{emp.dept}</td>
                  <td>{emp.sal}</td>
                </tr>)
            }
          </tbody>
        </table>) : (<div> no data found</div>)
      }

    </div>
  )
}