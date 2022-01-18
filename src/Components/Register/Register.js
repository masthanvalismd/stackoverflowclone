import React, { useState } from "react";
import Button from "@mui/material/Button";
import favicon from "./favicon.ico";
import "./register.css";
import axios from "axios";
import { useNavigate } from "react-router";

export function Register() {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    reEnterPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setUser({
      ...user,
      [name]: value,
    });
  };
  const register = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      //   alert("posted");
      axios
        .post("http://localhost:9000/register", user)
        .then((res) => alert(res.data.message));
    } else {
      alert("invalid credentials");
    }
  };
  return (
    <div className="register">
      {console.log("User", user)}
      <img src={favicon} alt="favicon"></img>
      <h1>Register</h1>
      <input
        type="text"
        name="name"
        value={user.name}
        placeholder="Enter Your Name"
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        value={user.email}
        placeholder="Enter Your email"
        onChange={handleChange}
      />
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Your Password"
        onChange={handleChange}
      />
      <input
        type="password"
        name="reEnterPassword"
        value={user.reEnterPassword}
        placeholder="Re-enter Your Password"
        onChange={handleChange}
      />
      <br />
      <Button variant="contained" onClick={register}>
        Register
      </Button>
      <div>Or</div>
      <div>
        <span>Already have an account</span>
        <Button variant="contained" onClick={() => navigate("/login")}>
          Login
        </Button>
      </div>
    </div>
  );
}
