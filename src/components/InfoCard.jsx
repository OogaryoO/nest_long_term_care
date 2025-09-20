import React from 'react';
import './InfoCard.css';

const InfoCard = ({ imageUrl, rating, description }) => {
  return (
    <div className="info-card">
        <div className="info-card-photo">
            <img src={imageUrl} alt="worker" />
        </div>
        <div className="info-card-details">
            <div className="info-card-rating">
            <span>⭐</span>
            <span>{rating}</span>
            </div>
            <p className="info-card-description">{description}</p>
        </div>
    </div>
    
  );
};

export default InfoCard;
