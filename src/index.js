import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/HomePage/Home";
import About from "./components/About Us/About";
import Login from "./components/LoginPage/Login";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
