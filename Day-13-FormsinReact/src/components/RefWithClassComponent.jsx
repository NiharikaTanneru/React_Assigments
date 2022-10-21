import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
class RefWithClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstname: '',lastname:'',email:'',password: ''}
        this.firstnameRef = React.createRef()
        this.lastnameRef = React.createRef()
        this.emailRef = React.createRef()
        this.pwdRef = React.createRef()
    }
    handleLogin = (e) => {
        e.preventDefault();
        if(this.firstnameRef.current.value==="" && this.pwdRef.current.value===""&&this.lastnameRef.current.value===""&&this.emailRef.current.value==="") {
            alert("Please enter details")
        }else if(this.firstnameRef.current.value===""&&this.lastnameRef.current.value===""&&this.pwdRef.current.value===""){
            alert("Please enter firstname and last name and password")
        }else if(this.pwdRef.current.value===""){
            alert("Please enter password")
        }
        else if(this.lastnameRef.current.value===""){
            alert("Please enter lastname")
        }
        else if(this.emailRef.current.value===""){
            alert("Please enter email")
        }else{
        alert("successfull login");
        }
    }
    render() {
        return(<React.Fragment>
            <h1>Login Page with Class component using REF</h1>
            <form>
                <div className="form-group mt-5">
                    <label>FirstName:</label>
                    <input style={{width:'40%',display:"inline-block"}} type="text" className="form-control mt-5" id="firstname" placeholder="Enter First Name" name="firstname" ref={this.firstnameRef}/>
                </div>

                <div className="form-group mt-3">
                    <label>LasttName:</label>
                    <input style={{width:'40%',display:"inline-block"}} type="text" className="form-control mt-5" id="lasttname" placeholder="Enter Last Name" name="lastname" ref={this.lastnameRef}/>
                </div>

                <div className="form-group mt-3">
                    <label>Email:</label>
                    <input style={{width:'40%',display:"inline-block"}} type="text" className="form-control mt-5" id="email" placeholder="Enter Email" name="email" ref={this.emailRef}/>
                </div>

                <div className="form-group mt-3">
                    <label>Password:</label>
                    <input style={{width:'40%',display:"inline-block"}} type="password" className="form-control mt-5" id="password" placeholder="Enter password" name="password" ref={this.pwdRef} />
                </div>
               <button type="submit" className="btn btn-primary mt-5" onClick={this.handleLogin}>Login</button>
           </form>
        </React.Fragment>)
    }
}
export default RefWithClassComponent;