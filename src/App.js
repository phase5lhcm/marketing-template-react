import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
