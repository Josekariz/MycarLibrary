import BaseRouter from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import React, { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  return (
    <>
      <Router>
        <BaseRouter user={user} setUser={setUser} />
      </Router>
    </>
  );
}

export default App;
