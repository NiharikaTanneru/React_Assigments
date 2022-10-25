import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddEmployee() {
  const [email, setEmail] = useState('');
  const [dept, setDept] = useState('')
  const [desg, setDesg] = useState('')
  const [name, setName] = useState('')
  const [sal, setSal] = useState('')

  const [error, setError] = useState('')
  const navigate = useNavigate()

  const changeEmail = (e) => {
    setEmail(e.target.value);
  }
  const changeDesg = (e) => {
    setDesg(e.target.value);
  }
  const changeDept = (e) => {
    setDept(e.target.value);
  }
  const changeName = (e) => {
    setName(e.target.value);
  }
  const changeSal = (e) => {
    setSal(e.target.value);
  }

  const handleAdd = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || desg === "" || dept === "" || sal === "") {
      setError("Please Enter the above details")
    }
    else {
      let emp = { name: name, email: email, desg: desg, dept: dept, sal: sal };
      axios.post(" http://localhost:4000/employeeDetails", emp)
      setError("")
      navigate('/view-emp')

    }

  }

  return (
    <div>
      <form style={{ width: '40%', margin: 'auto' }}>
        <div className="form-group m-2">
          <label htmlFor="Fname"> Name:</label>
          <input
            type="text"
            className="form-control "
            id="Fname"
            placeholder="Enter Name"
            name="Fname"
            value={name}
            onChange={changeName}
          />
        </div>

        <div className="form-group m-2">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter Email"
            name="email"
            value={email}
            onChange={changeEmail}
          />
        </div>
        <div className="form-group m-2">
          <label htmlFor="pwd">Designation</label>
          <select onChange={changeDesg} className="form-control">
            <option value=''>select</option>
            <option value='.net'>.net</option>
            <option value='ide web'>ide web</option>
            <option value='CDB'>CDB</option>
            <option value='Testing'>Testing</option>
          </select>
        </div>
        
        <div className="form-group m-2">
          <label htmlFor="pwd">Department</label>
          <select onChange={changeDept} className="form-control">
            <option value=''>select</option>
            <option value='Accounts'>Accounts</option>
            <option value='Finance'>Finance</option>
            <option value='Leadership'>Leadership</option>
            <option value='HR'>HR</option>
          </select>
        </div>
        <div className="form-group m-2">
          <label htmlFor="pwd">Salary</label>
          <input
            type="text"
            className="form-control"
            id="pwd"
            placeholder="Enter Salary"
            name="sal"
            value={sal}
            onChange={changeSal}
          />
        </div>
        <button type="submit" className="btn btn-primary m-2" onClick={handleAdd}>
          Add
        </button>
        {error &&
          <div className="text-danger">{error}</div>}
      </form>

    </div>
  )
}