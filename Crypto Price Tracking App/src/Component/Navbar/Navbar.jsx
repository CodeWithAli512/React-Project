import React, { useContext } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import { CoinContext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = ({ setShowlogin }) => {
  const context = useContext(CoinContext);

  if (!context) {
    // Context is undefined, return null or fallback UI
    return null;
  }

  const { setCurrency } = context;

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd":
        setCurrency({ name: "usd", Symbol: "$" });
        break;
      case "eur":
        setCurrency({ name: "eur", Symbol: "€" });
        break;
      case "pkr":
        setCurrency({ name: "pkr", Symbol: "₨" });
        break;
      default:
        setCurrency({ name: "usd", Symbol: "$" });
        break;
    }
  };

  return (
    <div className="navbar">
      <Link to={"/"}>
        {" "}
        <img src={logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          {" "}
          <li>Home</li>
        </Link>
        <li>features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="pkr">PkR</option>
        </select>
        <button
          onClick={() => {
            setShowlogin(true);
          }}
        >
          Sign up <img src={arrow_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
