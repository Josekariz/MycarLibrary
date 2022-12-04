import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function NavBar({ user, setUser }) {
  const navigate = useNavigate();

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
        navigate("/");
      }
    });
  }
  return (
    <>
      <h2 className="flex header">MCL</h2>
      <div className="center-div">
        <nav>
          <ul className="nav-links">
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="/review">
              <li>Review</li>
            </Link>
            <Link to="/contact">
              <li>Contact Us</li>
            </Link>
          </ul>
        </nav>
        <button className="signout" onClick={handleLogoutClick}>
          Sign out
        </button>
      </div>
    </>
  );
}
export default NavBar;
