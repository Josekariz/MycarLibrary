import BaseRouter from "../routes";
import { BrowserRouter as Router } from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <BaseRouter />
      </Router>
    </>
  );
}

export default App;
