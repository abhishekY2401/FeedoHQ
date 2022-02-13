import { useState, useEffect } from "react";
import Sawo from "sawo";
import Home from "../HomePage/Home";

import "./Login.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const Login = () => {
  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const [payload, setPayload] = useState({});

  useEffect(() => {
    var config = {
      containerID: "sawo-container",
      identifierType: "email",
      apiKey: API_KEY,
      onSuccess: (payload) => {
        console.log("Payload : " + JSON.stringify(payload));
        setUserLoggedIn(true);
        setPayload(payload);
      },
    };
    let sawo = new Sawo(config);
    sawo.showForm();
  }, []);

  return (
    <div className="containerStyle">
      <section>
        <h2 className="title">Feedo Login Page</h2>
        <h2 className="title">User Logged In : {isUserLoggedIn.toString()}</h2>

        {!isUserLoggedIn && <Home />}
      </section>
    </div>
  );
};

export default Login;
