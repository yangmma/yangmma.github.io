// gen:
import React from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/About.jsx";
import Page2 from "./pages/Experience";

// import components:
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Page1/>} />
        <Route path="/experience" element={<Page2/>} />
      </Routes>
    </>
  );
}

export default App;