import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar  from "./components/navbar";
import Home    from "./components/Home";
import Contact from "./components/Contact";
import Services from "./components/Services";



function App() {
  return (
    <Router>
      <Navbar />
     
      <Home /> {/* Todo está aquí */}
    </Router>
  );
}

export default App;
