import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./review.css";
import { useState } from "react";
function Review() {
  const [model, setModel] = useState("");
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [image_url, setImage_url] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/reviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        name,
        image_url,
        info,
      }),
    }).then((r) => {
      if (r.ok) {
        navigate("/home");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  const handleClear = (event) => {
    event.target.value = "";
  };

  return (
    <>
      <div className="review">
        <NavBar />
        <div className="review-card">
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <label for="model">Model</label>
              <input
                onClick={handleClear}
                placeholder="Model e.g Mercedes"
                required
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <label for="name">Name</label>
              <input
                onClick={handleClear}
                placeholder="Name e.g c200"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="image_url">Model</label>
              <input
                onClick={handleClear}
                placeholder="Image url"
                autoComplete="off"
                required
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
              />

              <label for="info">Info</label>
              <input
                onClick={handleClear}
                className="info"
                placeholder="your take on it?"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
              <button className="submit" type="submit">
                <em>Submit</em>
              </button>
            </form>
          </div>
          {errors.map((err) => (
            <li className="key" key={err}>
              {err}
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default Review;
