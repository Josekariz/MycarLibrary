import React from 'react';
import "../login/login.css";
function Login() {
  return ( <>
  <div className='login'>
  <h1 className='logo'>MyCarLibrary</h1>

  <div className='page'>

  <div className='cover'>
    <h1 style={{color:'rgba(255,255, 3, 1)'}}>Login </h1>
    <label for="username"><h3 style={{color:'white'}}>Username</h3></label>
    <input type="text" className='input' placeholder="username" ></input>
    <label for="password"><h3 style={{color:'white'}}>Password</h3></label>

    <input type="password" className='input' placeholder="******"></input>

<button className='btn'>Login</button>
<button className='sgn'>Don't have an account? SignUp</button>
  </div>
  </div>
  </div>
  
  </> );
}

export default Login;