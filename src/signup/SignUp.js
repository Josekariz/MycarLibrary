import React from "react";
import "../signup/signup.css";

function Signup() {
  return (
    <>
      <div className="signup">
        <h1 className="logo">MyCarLibrary</h1>

        <div className="page">
          <div className="cover">
            <h1 style={{ color: "rgba(255,255, 3, 1)" }}>Signup </h1>
            <label for="username">
              <h3 style={{ color: "white" }}>Username</h3>
            </label>
            <input type="text" className='input' placeholder="username"></input>
            
            <label for="password">
              <h3 style={{ color: "white" }}>Password</h3>
            </label>
            <input type="password" className='input' placeholder="**********"></input>

            <label for="password confirmation">
              <h3 style={{ color: "white" }}>Password confirmation</h3>
            </label>
            <input type="password" className='input' placeholder="**********"></input>

            <button className="btn">SignUp</button>
            <button className="sgn">Have an account? login</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
