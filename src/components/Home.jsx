import React from "react";
import "../styles/HomeStyles.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Pricing from "./Pricing";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Pricing />
    </div>
  );
};

export default HomePage;
