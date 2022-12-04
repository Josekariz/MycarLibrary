import NavBar from "../components/navbar/Navbar";
import React, { useEffect, useState } from "react";
import Login from "../login/Login";


function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <>
      <NavBar  user={user} setUser={setUser}/>
    
    </>
  );
}

export default Home;
