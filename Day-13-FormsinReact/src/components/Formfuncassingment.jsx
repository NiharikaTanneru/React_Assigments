import {useState} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";


const Formfuncassignment = () => {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(firstname===""&&lastname===""&&email===""&&password==="") {
            setError("Enter details correctly")
            setSuccess("")
        }
        else if(firstname===""){
            setError("Enter firstname")
            setSuccess("")
        }
        else if(lastname===""){
            setError("Enter lastname")
            setSuccess("")
        }
        else if(email===""){
            setError("Enter email")
            setSuccess("")
        }
        else if(password===""){
            setError("Enter password")
            setSuccess("")
        }
        else {
            setSuccess("Login successful")
            setError("")
        }
    }

  return (
    <>
    <h1>Login using Functional Component</h1>
      <div className="container">

        <form onSubmit={handleSubmit}>

          <div className="form-group mt-5">

            <label htmlFor="name">Firstname:</label>
            <input
              style={{ width: "20%" ,display:"inline-block"}}
              type="text"
              id="firstname"
              value={firstname}
              onChange={(event)=>setFirstname(event.target.value)}
              className="form-control"
              placeholder="Enter First Name"
            />

            <div className="form-group mt-5">
            <label htmlFor="name">Lasttname:</label>
            <input
              style={{ width: "20%",display:"inline-block" }}
              type="text"
              id="lasttname"
              value={lastname}
              onChange={(event)=>setLastname(event.target.value)}
              className="form-control"
              placeholder="Enter Last Name"
            />
          </div>
         
          <div className="form-group mt-5">
            <label htmlFor="name">Email:</label>
            <input
              style={{ width: "20%",display:"inline-block" }}
              type="text"
              id="email"
              value={email}
              onChange={(event)=>setEmail(event.target.value)}
              className="form-control"
              placeholder="Enter Email Address"
            />
            </div>

          <div className="form-group mt-5">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "20%",display:"inline-block" }}
              type="password"
              id="pwd"
              value={password}
              onChange={(event)=>setPassword(event.target.value)}
              className="form-control"
              placeholder="Enter password"
            />
            </div>
           </div>
          <button type="submit" className="btn btn-primary mt-5">
            Register
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
         </form>
     </div>
      </>
     );

     };

export default Formfuncassignment;
