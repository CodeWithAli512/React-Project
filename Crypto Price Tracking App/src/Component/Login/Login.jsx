import React, { useState } from "react";
import "./Login.css";
import cross_icon from "../../assets/cross_icon.png";
const Login = ({ setShowlogin }) => {
  const [currstate, setCurrstate] = useState("Login");

  return (
    <div className="login">
      <form className="login-container">
        <div className="login-title">
          <h2>{currstate}</h2>
          <img
            src={cross_icon}
            alt=""
            onClick={() => {
              setShowlogin(false);
            }}
          />
        </div>
        <div className="login-input">
          {currstate === "Login" ? (
            <></>
          ) : (
            <input type="text" placeholder="Your name" required />
          )}
          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Password" required />
        </div>
        <button>{currstate === "Sign Up" ? "Create account" : "Login"}</button>
        <div className="login-condition">
          <input type="checkbox" required />
          <p>By continuing, i agree to the terms of use and privacy policy</p>
        </div>
        {currstate === "Login" ? (
          <p>
            Create a new account?{" "}
            <span
              onClick={() => {
                setCurrstate("Sign Up");
              }}
            >
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => {
                setCurrstate("Login");
              }}
            >
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
