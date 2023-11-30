import React, { useState } from 'react';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div>
      <nav className='nav'>
        <h3>Jeffrey Koshy</h3>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
          <li>
            <i
              className={`fa-solid fa-bars-staggered mobile-menu ${
                isMobileMenuOpen ? 'open-menu' : 'closed-menu'
              }`}
              onClick={toggleMobileMenu}
            ></i>
          </li>
        </ul>
      </nav>

      <div className={`mobile-nav ${isMobileMenuOpen ? 'open-menu' : 'closed-menu'}`}>
        <span className='mobile-menu' onClick={toggleMobileMenu}></span>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About Me</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#contact'>Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
