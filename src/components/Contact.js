// src/components/Contact.js

import React, { useState } from 'react';
import './Contact.css';
import facebookIcon from './images/facebookIcon.gif';
import twitterIcon from './images/twitterIcon.gif';
import instagramIcon from './images/instagramIcon.gif';
import linkedinIcon from './images/linkedinIcon.gif';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formError, setFormError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);

    try {
      // Simulate sending data to a server (replace with your actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay

      // Basic validation (add more robust validation as needed)
      if (!formData.name || !formData.email || !formData.message) {
        setFormError('Please fill in all fields.');
        return;
      }

      console.log('Form submitted:', formData);
      setFormSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Form submission error:', error);
      setFormError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-text">We'd love to hear from you! Please fill out the form below.</p>

      {formSubmitted ? (
        <div className="success-message">
          <p>Thank you for your message! We will get back to you soon.</p>
        </div>
      ) : (
        <form className="contact-form" onSubmit={handleSubmit}>
          {formError && <div className="error-message">{formError}</div>}
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>
      )}

      <div className="social-icons">
        <a href="YOUR_FACEBOOK_URL" target="_blank" rel="noopener noreferrer">
          <img src={facebookIcon} alt="Facebook" className="social-icon" />
        </a>
        <a href="YOUR_TWITTER_URL" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="Twitter" className="social-icon" />
        </a>
        <a href="YOUR_INSTAGRAM_URL" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="Instagram" className="social-icon" />
        </a>
        <a href="YOUR_LINKEDIN_URL" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon}alt="LinkedIn" className="social-icon" />
        </a>
      </div>
    </div>
  );
}

export default Contact;