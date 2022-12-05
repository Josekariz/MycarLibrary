import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./review.css";
import { useState } from "react";
function Review() {
  const [model, setModel] = useState("Lmborghini");
  const [name, setName] = useState("Sterrato");
  const [info, setInfo] = useState("Leave a review about this awesome car");
  const [image_url, setImage_url] = useState(
    "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  );
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

  return (
    <>
      <div className="review">
        <NavBar />
        <div className="review-card">
          <div className="container">
            <form className="form" onSubmit={handleSubmit}>
              <label for="model">Model</label>
              <input
                placeholder="Model e.g Mercedes"
                autoComplete="off"
                autoCapitalize="on"
                value={model}
                onChange={(e) => setModel(e.target.value)}
              />
              <label for="name">Name</label>
              <input
                placeholder="Name e.g c200"
                autoComplete="off"
                autoCapitalize="on"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label for="image_url">Model</label>
              <input
                placeholder="image_url"
                autoComplete="off"
                value={image_url}
                onChange={(e) => setImage_url(e.target.value)}
              />

              <label for="info">Info</label>
              <input
                className="info"
                placeholder="Leave a review on your car"
                autoComplete="off"
                value={info}
                onChange={(e) => setInfo(e.target.value)}
              />
              <button className="submit" type="submit"><em>Submit</em></button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Review;
