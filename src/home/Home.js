import NavBar from "../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Login from "../login/Login";
import "./home.css";
import Search from "../components/Search";

function Home({ setUser, user }) {
  const [search, setSearch] = useState("");

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    getReviews();
  }, []);
  function getReviews() {
    fetch("https://mycarlibrary-production.up.railway.app/reviews")
      .then((r) => r.json())
      .then(setReviews);
  }

  const car = reviews
    .filter((item) => {
      return search.toLowerCase() === ""
        ? item
        : item.name.toLowerCase().includes(search.toLowerCase());
    })
    .map((car) => {
      return (
        <div key={car.id} className="car-card">
          <img className="img" alt="car" src={car.image_url} />
          <h4>Model: {car.model}</h4>
          <h4>Name: {car.name}</h4>
          <h4>info:</h4>
          <textarea className="txt">{car.info}</textarea>
          <div className="btnholder">
            <button className="bt green">
              <em>Update</em>
            </button>
            <button
              className="bt red"
              onClick={() => {
                handleDelClick(car.id);
              }}
            >
              <em>Delete</em>
            </button>
          </div>
        </div>
      );
    });

  function handleDelClick(id) {
    fetch(`https://mycarlibrary-production.up.railway.app/reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json)
      .then(getReviews);
  }

  if (!user) return <Login onLogin={setUser} />;
  return (
    <>
      <div className="home">
        <NavBar user={user} setUser={setUser} />
        <Search setSearch={setSearch} />
        <div className="homecard">{car}</div>
      </div>
      <p className="initial" >Add a car to get the full view</p>
    </>
  );
}

export default Home;
