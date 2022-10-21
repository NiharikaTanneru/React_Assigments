import {useState,useRef} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
const RefWithFunctionalComponent = () => {
    const firstnameRef = useRef('')
    const lastnameRef = useRef('')
    const emailRef = useRef('')
    const pwdRef = useRef('')
    const [success,setSuccess] = useState('')
    const [error,setError]= useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        if(firstnameRef.current.value==="" && pwdRef.current.value===""&&lastnameRef.current.value===""&& emailRef.current.value==="") {
          alert("Please enter details")
      }else if(firstnameRef.current.value===""&&lastnameRef.current.value===""&&pwdRef.current.value===""){
          alert("Please enter firstname and last name and password")
      }else if(pwdRef.current.value===""){
          alert("Please enter password")
      }
      else if(lastnameRef.current.value===""){
          alert("Please enter lastname")
      }
      else if(emailRef.current.value===""){
          alert("Please enter email")
      }else{
      alert("successfull login");
      }
    }
  return (
    <>
    <h1>Login Page with functional component using REF</h1>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-5">
            <label htmlFor="name">Firstname:</label>
            <input
              style={{ width: "20%",display:"inline-block" }}
              type="text"
              id="firstname"
              ref={firstnameRef}
              className="form-control"
              placeholder="Enter First Name"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="name">Lastname:</label>
            <input
              style={{ width: "20%" ,display:"inline-block"}}
              type="text"
              id="lastname"
              ref={lastnameRef}
              className="form-control"
              placeholder="Enter Last Name"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="name">Email:</label>
            <input
              style={{ width: "20%",display:"inline-block" }}
              type="text"
              id="email"
              ref={emailRef}
              className="form-control"
              placeholder="Enter Email"
            />
          </div>

          <div className="form-group mt-3">
            <label htmlFor="pwd">Password:</label>
            <input
              style={{ width: "20%" ,display:"inline-block"}}
              type="password"
              id="pwd"
              ref={pwdRef}
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Register
          </button>
          {success?<div className="text-success">{success}</div>:null}
          {error?<div className="text-danger">{error}</div>:null}
        </form>
      </div>
    </>
  );
};
export default RefWithFunctionalComponent;