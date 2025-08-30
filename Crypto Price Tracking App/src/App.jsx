import React, { useState } from "react";
import Navbar from "./Component/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";
import Footer from "./Component/Footer/Footer";
import Login from "./Component/Login/Login";

const App = () => {
  const [Showlogin, setShowlogin] = useState(false);

  return (
    <>
    {Showlogin? <Login setShowlogin = {setShowlogin}/>:<></>}
      <div className="app">
        <Navbar setShowlogin = {setShowlogin}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
