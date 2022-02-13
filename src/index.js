import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Home from "./components/HomePage/Home";
import About from "./components/About Us/About";
import Login from "./components/LoginPage/Login";
import Form from "./components/FeedbackPage/Form";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/" element={<Home />} />
      <Route path="/feedback" element={<Form />} />
    </Routes>
  </BrowserRouter>,
  rootElement
);
