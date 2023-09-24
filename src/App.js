import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUsScreen from "./Screens/AboutUsScreen";
import ContactUsScreen from "./Screens/ContactUsScreen";
import HomeScreen from "./Screens/HomeScreen";
import PortfolioScreen from "./Screens/PortfolioScreen";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about-us" element={<AboutUsScreen />} />
          <Route path="/contact-us" element={<ContactUsScreen />} />
          <Route path="/portfolio" element={<PortfolioScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
