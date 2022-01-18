import Button from "@mui/material/Button";
import favicon from "./favicon.ico";
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

import "./login.css";
export function Login({ setLoginuser }) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // console.log(name,value)
    setUser({
      ...user,
      [name]: value,
    });
  };

  const login = () => {
    axios.post("http://localhost:9000/login", user).then((res) => {
      alert(res.data.message);
      setLoginuser(res.data.user);
      navigate("/");
    });
  };
  return (
    <div className="login">
      {console.log("user", user)}
      <img src={favicon} alt="favicon"></img>
      <h1>Login</h1>
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
      <br />
      <Button variant="contained" onClick={login}>
        Login
      </Button>
      <div>Or</div>
      <div>
        <span>New user!</span>
        <Button variant="contained" onClick={() => navigate("/register")}>
          Register
        </Button>
      </div>
    </div>
  );
}
