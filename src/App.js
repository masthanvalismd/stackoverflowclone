import React, { useState } from "react";

import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import "./App.css";

import { Navbar } from "./Components/Navbar/Navbar";
import { Login } from "./Components/Login/Login";
import { Register } from "./Components/Register/Register";
export default function App() {
  const navigate = useNavigate();

  const [user, setLoginuser] = useState({});
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path="/"
          element={
            user && user._id ? (
              <Navbar />
            ) : (
              <Login setLoginuser={setLoginuser} />
            )
          }
        />

        <Route
          exact
          path="/login"
          element={<Login setLoginuser={setLoginuser} />}
        />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
