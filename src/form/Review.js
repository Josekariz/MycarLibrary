import NavBar from "../components/navbar/Navbar";
import { useNavigate } from "react-router-dom";
import "./review.css";
import { useState } from "react";
function Review() {
  const [model, setModel] = useState(" Mercedes-Benz ");
  const [name, setName] = useState("S-Class");
  const [info, setInfo] = useState(
    "The Mercedes-Benz S-Class, formerly known as Sonderklasse (German for special class, abbreviated as S-Klasse), is a series of full-sized luxury sedans, limousines and armored sedans produced by the German automaker Mercedes-Benz, a division of the German company Mercedes-Benz. The S-Class is the designation for top-of-the-line Mercedes-Benz models and was officially introduced in 1972 with the W116, and has remained in use ever since. The S-Class is the flagship vehicle for Mercedes-Benz."
  );
  const [image_url, setImage_url] = useState(
    "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Mercedes-Benz_W223_IMG_6663.jpg/280px-Mercedes-Benz_W223_IMG_6663.jpg"
  );
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://mycarlibrary-production.up.railway.app/reviews", {
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
              <label for="image_url">Image</label>
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
