import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../login/login.css";
function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
        to_home();
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  console.log(errors);

  const navigate = useNavigate();

  const to_signup = () => {
    navigate("/signup");
  };
  const to_home = () => {
    navigate("/home");
  };
  return (
    <>
      <div className="login">
        <h1 className="logo">MyCarLibrary</h1>

        <div className="page">
          <div className="cover">
            <h1 style={{ color: "rgba(255,255, 3, 1)" }}>Login </h1>

            <label for="username">
              <h3 style={{ color: "white" }}>Username</h3>
            </label>
            <input
              type="text"
              className="input"
              placeholder="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></input>
            <label for="password">
              <h3 style={{ color: "white" }}>Password</h3>
            </label>

            <input
              type="password"
              className="input"
              placeholder="******"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>

            <button className="btn" onClick={handleSubmit}>
              Login
            </button>
            <button onClick={to_signup} className="sgn">
              Don't have an account? <em>SignUp</em>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
