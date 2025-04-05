import React from "react";
import { Link } from "react-router-dom";
import "./style.css";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img
            src="/src/assets/logo.png"
            className="footer-logo-img"
            style={{
              width: "300px",
              height: "250px",
              objectFit: "contain",
            }}
            alt="Logo"
          />
        </div>
        <div className="footer-links">
         
          <ul className="social-links">
            <li >
            <a href="https://www.linkedin.com/in/sankha-subhra-das-625ab6201/" >
                <img src="/footer/linkedIn.png" alt="linkedIn" />
              </a>
            </li>
            <li>
            <a href="https://github.com/sankha1545">
                <img src="/footer/github.png" alt="Github" />
              </a>
            </li>
            
            
           
           
          </ul>
        </div>
      </div>
      <ul className="contact-us">
        <li className="call" >
          📞 <a href="tel:+91 8597786209" className="no-underline hover-effect">+91-8597786209</a>
        </li>
        <li>
        ✉️ <a href="mailto:sankhasubhradas1@gmail.com" className="no-underline hover-effect">sankhasubhradas1@gmail.com</a>
        </li>
       
      </ul>
      <hr />
      <div className="footer-bottom">
        <p>COPYRIGHTS © 2025 SANKHA SUBHRA DAS ALL RIGHTS RESERVED</p>
      </div>
    </footer>
  );
};

export default Footer;
