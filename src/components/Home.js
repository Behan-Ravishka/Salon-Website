// src/components/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Elevate Your Beauty at Aetheria</h1>
          <p>Experience luxurious treatments tailored to your unique style.</p>
          <Link to="/services" className="hero-button">Discover Our Services</Link>
        </div>
      </section>

      <section className="featured-services">
        <h2>Featured Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <i className="fas fa-cut"></i>
            <h3>Precision Haircuts</h3>
            <p>Expert styling for a flawless look.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-spa"></i>
            <h3>Relaxing Facials</h3>
            <p>Rejuvenate your skin with our premium treatments.</p>
          </div>
          <div className="service-item">
            <i className="fas fa-paint-brush"></i>
            <h3>Makeup Artistry</h3>
            <p>Enhance your natural beauty for any occasion.</p>
          </div>
        </div>
      </section>

      <section className="booking-cta">
        <h2>Ready to Experience Aetheria?</h2>
        <p>Book your appointment today and let us pamper you.</p>
        <Link to="/contact" className="book-now-button">Book Now</Link>
      </section>

      <section className="testimonial-section">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Aetheria exceeded my expectations! The stylists are incredibly talented."</p>
          <p>- Sarah M.</p>
        </div>
      </section>
    </div>
  );
}

export default Home;