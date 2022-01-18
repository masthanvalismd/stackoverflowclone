import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import favicon from "./favicon.ico";
import { Home } from "../Home";
import { User } from "../User";
import { Questions } from "../Questions/Questions";
import { Company } from "../Company";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="navBar">
        <AppBar
          postion="fixed"
          style={{
            background: "white",
            color: "black",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              <img src={favicon} alt="favicon"></img> Stack <b>Overflow</b>
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/userprofile");
              }}
            >
              User Profile
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/questions");
              }}
            >
              Questions
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/Company");
              }}
            >
              Company
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 6,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userprofile" element={<User />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </Box>
    </div>
  );
}
