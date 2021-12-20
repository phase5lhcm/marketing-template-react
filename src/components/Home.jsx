import React from "react";
import "../styles/HomeStyles.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Pricing />
      <Testimonials />
    </div>
  );
};

export default HomePage;
