import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services.js";
import PrivateOffice from "./components/Services/PrivateOffice.js"
import VirtualOffice from "./components/Services/VirtualOffice.js"
import MeetingRoomPackages from "./components/Services/MeetingRoomPackages.js"

import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />


          <Route path="/services" element={<Services />} />
          <Route path="/private-office" element={<PrivateOffice />} />
          <Route path="/virtual-office" element={<VirtualOffice />} />
          <Route path="/meeting-room-packages" element={<MeetingRoomPackages />} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
