import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Page1 from "./pages/Home";
import Page2 from "./pages/About";
import Page3 from "./pages/Projects";
import Page4 from "./pages/Experience";
import Page5 from "./pages/Publications";
import Footer from "./components/widgets/Footer";
import './App.css'; 

// components:
import NavBar from "./components/widgets/NavBar";

function AppContent() {
  const location = useLocation();
  const excludedNavPaths = ["/"]
  const showNavbar = !excludedNavPaths.includes(location.pathname);


  return (
    <div className="app">
      <div className="content">
        {showNavbar && <NavBar/>}
        <Routes>
            <Route path="/" element={<Page1/>} />
            <Route path="/about" element={<Page2/>} />
            <Route path="/projects" element={<Page3/>} />
            <Route path="/experience" element={<Page4/>} />
            <Route path="/publications" element={<Page5/>} />
        </Routes>
        <Footer/>
      </div>
    </div>
  )

}


function App() {
  return (
    <AppContent />
  );
}

export default App;