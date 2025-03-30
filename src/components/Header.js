// src/components/Header.js

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './images/logo.png';
import './Header.css';

function Header() {
  const [isScrolling, setIsScrolling] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setIsScrolling(true);

      setVisible((prevVisible) => {
        if (currentScrollPos > prevScrollPos && currentScrollPos > 100) {
          return false;
        } else {
          return true;
        }
      });

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${visible ? 'visible' : 'hidden'}`}>
      <div className="navlogo">
        <img src={logo} alt="Aetheria Logo" className="logo" />
      </div>
      <nav className={`nav-items ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="nav-item">Home</Link>
        <Link to="/services" className="nav-item">Services</Link>
        <Link to="/gallery" className="nav-item">Gallery</Link>
        <Link to="/about" className="nav-item">About</Link>
        <Link to="/contact" className="nav-item">Contact</Link>
      </nav>
      <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
}

export default Header;