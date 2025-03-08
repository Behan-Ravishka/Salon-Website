// src/components/Gallery.js

import React, { useState } from 'react';
import './Gallery.css';

function Gallery() {
  const images = [
    '/images/gallery1.jpeg',
    '/images/gallery2.jpeg', 
    '/images/gallery3.jpeg',   
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="gallery-container">
      <h1>Our Gallery</h1>
      <div className="image-grid">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Gallery ${index + 1}`}
            onClick={() => openModal(image)}
          />
        ))}
      </div>
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Large View" />
            <span className="close-button" onClick={closeModal}>&times;</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gallery;