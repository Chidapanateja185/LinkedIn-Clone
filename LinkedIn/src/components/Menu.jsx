import React from 'react';
import "../css/menu.css";
import 'boxicons';
import logo from "../images/LinkedIn-Logo.wine.png";

const Menu = () => {
  return (
    <div>
      <div className="main">
        <div className="navbar">
          <div className="logo">
              <img src={logo} alt='Logo'/>
              <h3>Learning</h3>
          </div>
          <div className="sign">
              <h2>Buy for my team</h2>
              <button>Sign in</button>
          </div>
        </div>
          <div className="blue-line"></div>
      </div>
    </div>
  )
}

export default Menu;
