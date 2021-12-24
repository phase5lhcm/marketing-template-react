import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";
import PricingRoute from "./routes/pricingRoute";
import FAQRoute from "./routes/FAQS";
import ContactForm from "./components/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pricing" element={<PricingRoute />} />
        <Route path="/faq" element={<FAQRoute />} />
        <Route path="/contact" element={<ContactForm />} />
      </Routes>
    </>
  );
}

export default App;
