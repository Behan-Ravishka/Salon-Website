// src/components/Gallery.js

import React, { useState } from 'react';
import './Gallery.css';
import gallery1 from './images/gallery1.jpeg';
import gallery2 from './images/gallery2.jpeg';
import gallery3 from './images/gallery3.jpeg';

function Gallery() {
    const images = [
        gallery1,
        gallery2,
        gallery3,
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