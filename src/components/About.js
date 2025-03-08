// src/components/About.js

import React, { useState } from 'react';
import './About.css';

function About() {
  const [activeMember, setActiveMember] = useState(null);

  const handleMemberClick = (member) => {
    setActiveMember(member === activeMember ? null : member);
  };

  return (
    <div className="about-container">
      <h1>About Aetheria</h1>
      <p>
        Aetheria is dedicated to providing exceptional salon services in a luxurious and relaxing environment. Our team of experienced stylists and therapists are passionate about enhancing your natural beauty.
      </p>
      <p>
        We believe in using only the highest quality products and staying up-to-date with the latest trends and techniques. Our goal is to ensure that every client leaves feeling confident and rejuvenated.
      </p>
      <div className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div
            className={`team-member ${activeMember === 1 ? 'active' : ''}`}
            onClick={() => handleMemberClick(1)}
          >
            <img src="images/team1.jpeg" alt="Team Member 1" />
            <h3>Stylist 1</h3>
            <p>Expert Hair Stylist</p>
            {activeMember === 1 && (
              <div className="member-details">
                <p>Stylist 1 has 10+ years of experience in hair styling and specializes in modern haircuts and color techniques.</p>
                <p>Certifications: Advanced Hair Coloring, Modern Styling Techniques.</p>
              </div>
            )}
          </div>
          <div
            className={`team-member ${activeMember === 2 ? 'active' : ''}`}
            onClick={() => handleMemberClick(2)}
          >
            <img src="images/team2.jpeg" alt="Team Member 2" />
            <h3>Therapist 1</h3>
            <p>Skin Care Specialist</p>
            {activeMember === 2 && (
              <div className="member-details">
                <p>Therapist 1 is a certified skin care specialist with expertise in facials and skin rejuvenation treatments.</p>
                <p>Specializes in: Anti-aging treatments, deep cleansing facials.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;