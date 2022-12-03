import React, { useEffect, useState } from "react";
import Login from "../login/Login";
import SignUp from "../signup/SignUp.js";

function App() {  const [user, setUser] = useState(null);

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

//  if (!user) return <Login onLogin={setUser} />;


 return(<>
 <SignUp/>
  </>
  )
}

export default App;
