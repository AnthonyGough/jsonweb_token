import React from "react";
import { useState } from 'react';

import "./App.css";
const URL = `${import.meta.env.VITE_API_URL}/user/login`;

function App() {
  const [buttonText, setButtonText] = useState("Login");

  async function login() {    

    return await fetch(URL, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: "mike@gmail.com", password: "password" }),
    })
    .then((res) => res.json().then(res.ok ? setButtonText("Success") : setButtonText("Failed")))    
      .then((res) => {
        localStorage.setItem("token", res.bearerToken.token);
        localStorage.setItem("refreshToken", res.refreshToken.token);
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <h1>JWT Token Example</h1>
      <button onClick={login}>{buttonText}</button>
    </div>
  );
}

export default App;