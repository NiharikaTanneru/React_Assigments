import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class Formclassassignment extends React.Component {
    constructor(props){
        super(props);
        this.state = { firstname: '', lastname: '',email:'',password:''}
    }
    setEmpState = (e) => {
           const value = e.target.value;
           const field =  e.target.name;
           this.setState({[field]:value})
    }
    handleLogin = (e) => {
        e.preventDefault();
    
    if(this.state.firstname===" "&&this.state.lastname===" "&&this.state.email==" "&&this.state.password==" ") {
        alert("Enter all the details correctly")
    }
    else {
        alert('login Successful')
    }
    }

    render() {
        return(<React.Fragment>
            <h1>Login Using Class Component</h1>
            <form>
                <div className="form-group">
                    <input style={{width:'40%',textAlign:'center',marginTop:'50px',marginLeft:'450px'}} type="text" className="form-control" value={this.state.firstname} id="name" placeholder="First Name" name="firstname" onChange={this.setEmpState} />
                </div>

                <div className="form-group">
                    <input style={{width:'40%',textAlign:'center',marginTop:'20px',marginLeft:'450px'}} type="text" className="form-control" value={this.state.lasttname} id="name" placeholder="Last Name" name="lasttname" onChange={this.setEmpState} />
                </div>

                <div className="form-group">
                    <input style={{width:'40%',textAlign:'center',marginTop:'20px',marginLeft:'450px'}} type="email" className="form-control" value={this.state.email} id="email" placeholder="Email" name="email" onChange={this.setEmpState} />
                </div>

                <div className="form-group">
                    <input style={{width:'40%',textAlign:'center',marginTop:'20px',marginLeft:'450px'}} type="password" className="form-control" value={this.state.password} id="pwd" placeholder="Enter password" name="password" onChange={this.setEmpState} />
                </div>
                 
                    <input type="checkbox" name="" id="" />
                    <label htmlFor=""style={{width:'30%',marginTop:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias vel omnis rem, reiciendis, </label>
                    <br /><br />
                    <input type="checkbox" name="" id="" />
                    <label htmlFor=""style={{width:'30%',marginTop:'10px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto alias vel omnis rem, reiciendis, </label>
                    <br />
                    <br />
               <button type="submit" className="btn btn-primary" style={{width:'10%',textAlign:'center',float:'left',marginTop:'20px',marginLeft:'850px'}}  onClick={this.handleLogin}>Register</button>

           </form>

        <br /><br /> <br />
           <div className="resultDiv">
    <h1>FirstName:{"  "+ this.state.firstname}</h1>
    <h1>lastname:{"  "+this.state.lastname}</h1>
    <h1>Email:{"  "+this.state.email}</h1>
    <h1>Password:{"  "+this.state.password}</h1>
     </div>
        </React.Fragment>)
    }
}
export default Formclassassignment;