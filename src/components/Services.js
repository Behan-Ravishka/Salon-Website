// src/components/Services.js

import React, { useState } from 'react';
import './Services.css';

function Services() {
  const [activeService, setActiveService] = useState(null);

  const handleServiceClick = (service) => {
    setActiveService(service === activeService ? null : service);
  };

  const services = [
    {
      id: 1,
      icon: 'fas fa-cut',
      title: 'Haircuts & Styling',
      description: 'Precision haircuts, styling, and treatments.',
      details: [
        'Haircuts',
        'Coloring',
        'Styling',
        'Treatments',
        'Extensions',
        'Bridal Hair',
      ],
    },
    {
      id: 2,
      icon: 'fas fa-spa',
      title: 'Facials & Skin Care',
      description: 'Luxurious facials and skin rejuvenation.',
      details: ['Facials', 'Peels', 'Skin analysis', 'Skin treatments', 'Microdermabrasion', 'Anti-aging Treatments'],
    },
    {
      id: 3,
      icon: 'fas fa-paint-brush',
      title: 'Makeup Artistry',
      description: 'Professional makeup for any occasion.',
      details: ['Bridal makeup', 'Event makeup', 'Makeup lessons', 'Lash extensions', 'Brow shaping', 'Airbrush makeup'],
    },
    {
      id: 4,
      icon: 'fas fa-hand-sparkles',
      title: 'Manicures & Pedicures',
      description: 'Relaxing hand and foot treatments.',
      details: ['Manicures', 'Pedicures', 'Nail art', 'Gel nails', 'Spa pedicures', 'Paraffin treatments'],
    },
    {
      id: 5,
      icon: 'fas fa-sun',
      title: 'Tanning Services',
      description: 'Achieve a natural, sun-kissed glow.',
      details: ['Spray tanning', 'Tanning lotions', 'Sunless tanning advice'],
    },
    {
      id: 6,
      icon: 'fas fa-user-friends',
      title: 'Couples Packages',
      description: 'Enjoy a relaxing spa day with your partner.',
      details: ['Couples massages', 'Couples facials', 'Couples manicures & pedicures'],
    },
    {
      id: 7,
      icon: 'fas fa-gift',
      title: 'Gift Packages',
      description: 'Give the gift of beauty and relaxation.',
      details: ['Customizable gift packages', 'Spa day gift cards', 'Product sets'],
    },
    {
      id: 8,
      icon: 'fas fa-gem',
      title: 'Advanced Aesthetic Treatments',
      description: 'Specialized treatments for advanced results.',
      details: ['Laser hair removal', 'Chemical peels', 'Micro-needling', 'Dermaplaning'],
    },
  ];

  return (
    <div className="services-container">
      <h1>Our Services</h1>
      <div className="service-list">
        {services.map((service) => (
          <div
            key={service.id}
            className={`service-item ${activeService === service.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(service.id)}
          >
            <i className={service.icon}></i>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            {activeService === service.id && (
              <div className="service-details">
                <ul>
                  {service.details.map((detail, index) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;