import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <p>© {new Date().getFullYear()} Aetheria Salon. All rights reserved.</p>
      </footer>
  );
}

export default Header;