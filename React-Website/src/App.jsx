import React from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { Routes, Route } from "react-router-dom";
import Page1 from "./pages/About.jsx";
import Page2 from "./pages/Experience";

// components:
import NavBar from "./components/widgets/NavBar";


function App() {
  return (
    <ParallaxProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Page1/>} />
          <Route path="/experience" element={<Page2/>} />
        </Routes>
    </ParallaxProvider>
  );
}

export default App;