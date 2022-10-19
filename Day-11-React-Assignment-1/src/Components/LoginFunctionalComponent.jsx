import './css/LoginComponent.css';

function LoginFunctionalComponent(){
    return(
<div className="container">
            <div className="section-1">
             <h2>Sign up now</h2>
             <p>Get access to your orders and chat for support.</p>
            </div>
            <div className="section-2">
              <input className="section-2-text" type="text" name="" id="" placeholder='Enter Username'/>
              <input className="section-2-text" type="text" name="" id="" placeholder='Password'/>
              <button className='section-2-button'>Sign In</button>
              <a href="#">Terms and Conditions</a>
            </div>
        </div>
      );
}

export default LoginFunctionalComponent;