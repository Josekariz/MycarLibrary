import NavBar from "../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Login from "../login/Login";
import "./home.css";
import Search from "../components/Search";

function Home({ setUser, user }) {
  const [search, setSearch] = useState("");

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }, []);
  const car = reviews
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((car) => {
      return (
        <div className="car-card">
          <img
            className="img"
            alt="car"
            src={car.image_url}
          />
          <h4>Model: {car.model}</h4>
          <h4>Name: {car.name}</h4>
          <h4>info:</h4>
          <textarea className="txt">
          {car.info}
          </textarea>
          <div className="btnholder">
            <button className="bt green">
              <em>Update</em>
            </button>
            <button className="bt red">
              <em>Delete</em>
            </button>
          </div>
        </div>
      );
    });

  if (!user) return <Login onLogin={setUser} />;
  return (
    <>
      <div className="home">
        <NavBar user={user} setUser={setUser} />
        <Search setSearch={setSearch}/>
        <div className="homecard">{car}</div>
      </div>
    </>
  );
}

export default Home;
