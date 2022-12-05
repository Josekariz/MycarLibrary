import NavBar from "../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Login from "../login/Login";
import "./home.css";

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <>
      <div className="home">
        <NavBar user={user} setUser={setUser} />
        <div className="homecard">
          <div className="car-card">
            <img
              className="img"
              alt="car"
              src="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
            <h3>Model:</h3>
            <h3>Name:</h3>
            <h4>info:</h4>
            <textarea className="txt">
              kjsdkjksjdlkjsadkjdksdjsdkjskdksjdksjdksdkdjdkjdksjdksjdkdkdkjsdksdkjsdksdsdskdskddkdklkdslkdlskdlskdlsdlsdlskdldlskdldlsdlsdkdsdlksd;lks
            </textarea>
            <div className="btnholder">
              <button className="bt green"><em>Update</em></button>
              <button className="bt red"><em>Delete</em></button>
            </div>
          </div>
          <div className="car-card">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1580414057403-c5f451f30e1c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
              alt="car"
            />
            <h3>Model:</h3>
          </div>
          <div className="car-card">
            <img
              className="img"
              src="https://images.unsplash.com/flagged/photo-1553505192-acca7d4509be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=890&q=80"
              alt="car"
            />
          </div>
          <div className="car-card"></div>
          <div className="car-card"></div>
          <div className="car-card"></div>
          <div className="car-card"></div>
          <div className="car-card"></div>
        </div>
      </div>
    </>
  );
}

export default Home;
