import React, { useState } from 'react';
import './Portfolio.css';
import mywork_data from '../../assets/mywork_data.js';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image); // Set the clicked image
  };

  const closeModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <div id='portfolio' className='Portfolio'>
      <div className="port-photo">
        <h1>My Work</h1>
      </div>
      <div className="my-work">
        {mywork_data.map((work, index) => (
          <img
            key={index}
            src={work.w_img}
            alt={`Work ${index + 1}`}
            onClick={() => handleImageClick(work.w_img)}
            style={{ cursor: 'pointer' }} // Make the image clickable
          />
        ))}
      </div>

      {/* Modal for viewing the image */}
      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={closeModal}>
              &times;
            </span>
            <img src={selectedImage} alt="Selected Work" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;

