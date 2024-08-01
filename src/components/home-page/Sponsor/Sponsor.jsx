import React from 'react';
import './Sponsor.css';
import Sponsorimg from "../assets-h/Sponsor.png"; // Assuming you have multiple sponsor images

const Sponsor = () => {
  const images = [Sponsorimg, Sponsorimg, Sponsorimg, Sponsorimg, Sponsorimg, Sponsorimg, Sponsorimg, Sponsorimg];
  
  return (
    <div className="sponsor-section">
      <div className="line-container">
        <div className="line-text">
          <h3 className='text-s1'>
              Trusted by 10,000+ Indian MSME Manufacturers
          </h3>
        </div>
      </div>
      <div className="sponsor-images">
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Sponsor ${index + 1}`} className="sponsor-img"/>
        ))}
      </div>
    </div>
  );
};

export default Sponsor;
