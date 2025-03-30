// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <Router basename="/Salon-Website"> {/* Replace Salon-Website with your repo name */}
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/home" element={<Home />} /> {/* Changed from /Home to / */}
            <Route path="/services" element={<Services />} /> {/* Changed to lowercase */}
            <Route path="/gallery" element={<Gallery />} /> {/* Changed to lowercase */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} Aetheria Salon. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;