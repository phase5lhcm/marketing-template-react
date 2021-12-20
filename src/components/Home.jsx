import React from "react";
import "../styles/HomeStyles.css";
import NavBar from "./NavBar";
import Hero from "./Hero";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import FAQPage from "./FAQPage";
import ContactForm from "./Contact";

const HomePage = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Pricing />
      <Testimonials />
      <FAQPage />
      <ContactForm />
    </div>
  );
};

export default HomePage;
