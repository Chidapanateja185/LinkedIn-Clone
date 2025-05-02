import React from 'react'
import "../css/footer.css"
import logo from "../images/LinkedIn-Logo.wine.png";


const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <h1>Give your team a faster way to learn and apply new skills.</h1>
            <button>Buy for my team</button>
        </div>
        <div className="footer">
          <div className="links">
             <a href="">About</a>
             <a href="">Cookie Policy</a>
             <a href="">Privacy Policy</a>
             <a href="">Your California Privacy Choices</a>
             <a href="">User Agreement</a>
             <a href="">Accessibility</a>
          </div>
          <div className="bottom">
            <img src={logo} alt='Logo' />
            <p>© LinkedIn Corporation 2025</p>
          </div>
        </div>
    </div>
  )
}

export default Footer
