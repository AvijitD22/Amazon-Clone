import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import amazonLogo from "../images/amazon__logo.png";
import "./Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const login = (event) => {
    event.preventDefault();
    // Login Logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        // Logged In,redirect to home
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };
  const register = (event) => {
    event.preventDefault();
    // Register Logic
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // Created user and logged in, redirect to home
        history.push("/");
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <Link to="/">
        <img className="login__logo" src={amazonLogo} alt="" />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form action="">
          <h5>Email</h5>
          <input
            value={email}
            onChange={onChangeEmail}
            type="email"
            name=""
            id=""
            required
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={onChangePassword}
            type="password"
            name=""
            id=""
            required
          />
          <button onClick={login} type="submit" className="login__signInButton">
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create Your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
