import React, { useState } from "react";
import '../homepg.css';


function Footer() {
  return (
    <footer>

      <ul className="list-inline">
        <li className="list-inline-item"><a href="#">Home</a></li>
        <li className="list-inline-item"><a href="#">Login</a></li>
        <li className="list-inline-item"><a href="#">Sign Up</a></li>

      </ul>

      <p className="copyright">Connect 2 Call © 2022</p>
    </footer>
  );
}

export default Footer;
