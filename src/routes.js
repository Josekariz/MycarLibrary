import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login.js";
import Home from "./home/Home.js";
import Contact from "./contact/Contact";
import Review from "./form/Review.js";
import Signup from "./signup/SignUp.js";
// import EditPropertyForm from "./components/AddPropertyForm ";
const BaseRouter = ({setUser,user, autologin}) => (
  <div>
    <Routes>
      <Route path="/" element={<Home user={user} setUser={setUser} />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/review" element={<Review />} />
      <Route path="/signup" element={<Signup autologin={autologin}/>} />
      <Route path="/login" element={<Login autologin={autologin} />} />

    </Routes>
  </div>
);
export default BaseRouter;
