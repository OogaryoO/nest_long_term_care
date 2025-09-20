import React, { useState } from 'react';
import Badge from './Badge';
import Avatar from './Avatar';
import Button from './Button';
import './WorkerCard.css';

const WorkerCard = ({ worker }) => {
  const [showAllComments, setShowAllComments] = useState(false);
  
  const displayedComments = showAllComments ? worker.comments : worker.comments.slice(0, 2);
  
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={`star ${i < Math.floor(rating) ? 'star-filled' : 'star-empty'}`}>
        ★
      </span>
    ));
  };

  return (
    <div className="worker-card">
      <div className="worker-card-header">
        <div className="worker-info">
          <Avatar 
            src={worker.imageUrl} 
            alt={worker.name}
            className="worker-avatar"
          />
          
          <div className="worker-details">
            <h3 className="worker-name">{worker.name}</h3>
            
            {/* Rating */}
            <div className="rating-container">
              <div className="stars-container">
                {renderStars(worker.rating)}
              </div>
              <span className="rating-score">{worker.rating}</span>
              <span className="review-count">({worker.reviewCount} reviews)</span>
            </div>
            
            {/* Skills */}
            <div className="skills-container">
              {worker.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="skill-badge">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="worker-card-content">
        {/* Description */}
        <div className="description-section">
          <h4 className="section-title">About</h4>
          <p className="worker-description">{worker.description}</p>
        </div>

        {/* Comments/Reviews */}
        {worker.comments && worker.comments.length > 0 && (
          <div className="reviews-section">
            <h4 className="section-title">Recent Reviews</h4>
            <div className="reviews-list">
              {displayedComments.map(comment => (
                <div key={comment.id} className="review-card">
                  <div className="review-header">
                    <div className="review-author-info">
                      <span className="review-author">{comment.author}</span>
                      <div className="review-rating">
                        {renderStars(comment.rating)}
                      </div>
                    </div>
                    <span className="review-date">
                      {new Date(comment.date).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="review-text">"{comment.text}"</p>
                </div>
              ))}
              
              {worker.comments.length > 2 && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowAllComments(!showAllComments)}
                  className="show-more-button"
                >
                  {showAllComments ? 'Show Less' : `Show ${worker.comments.length - 2} More Reviews`}
                </Button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="worker-card-footer">
        <Button className="contact-button" variant="primary">
          Contact Caregiver
        </Button>
        <Button variant="outline" className="profile-button">
          View Full Profile
        </Button>
      </div>
    </div>
  );
};

export default WorkerCard;