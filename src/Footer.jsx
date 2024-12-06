import React from "react";
import "./Footer.css";
import { FaInstagramSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-container">
      <div className="address">
        <p>36 ST NEW YORK</p>
        <p>PHONE:040-2166</p>
        <button>Email SignUp</button>
      </div>
      <div className="socials">
        <FaInstagramSquare />
        <FaFacebook />
        <FaSquareXTwitter />
      </div>
      <div className="ending">
        <p>Powered by React.JS</p>
      </div>
    </div>
  )
}

export default Footer;