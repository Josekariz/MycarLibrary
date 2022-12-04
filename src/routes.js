import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login.js";
import Home from "./home/Home.js";
import Contact from "./contact/Contact";
import Review from "./form/Review.js";
import Signup from "./signup/SignUp.js";
// import EditPropertyForm from "./components/AddPropertyForm ";
const BaseRouter = () => (
  <div>
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/review" element={<Review />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/" element={<Login />} />

    </Routes>
  </div>
);
export default BaseRouter;
