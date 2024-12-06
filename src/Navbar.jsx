import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [checker, setChecker] = useState("");
  const [isOpen, setIsOpen] = useState(false);



  function handleHome() {
    setChecker("1");
  }

  function handleMenu() {
    setChecker("2");
  }

  function handleReserve() {
    setChecker("4");
  }

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="navbar-wrapper">
      <div className="navbar-container">
        <div className="content-left">
          <h1>The Palate Emporium</h1>
        </div>
        <button className="menu-toggle-button" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`content-right ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={handleHome} className={checker === "1" ? "ten" : ""}>Home</Link>
          <Link to="/menu" onClick={handleMenu} className={checker === "2" ? "ten" : ""}>Menu</Link>
         
          <Link to="/Reserve" onClick={handleReserve} className={checker === "4" ? "ten" : ""}>Reserve Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
