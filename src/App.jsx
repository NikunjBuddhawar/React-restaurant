import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Content1 from "./Content1"
import Menu from "./Menu";
import Reserve from "./Reserve";

import "./App.css";

function App() {
  return (
    <Router className="fine">
      <div className="Container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Content1 />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reserve" element={<Reserve />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  )
}

export default App;