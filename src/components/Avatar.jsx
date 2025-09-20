import React from 'react';

const Avatar = ({ src, alt, fallback, className = '' }) => {
  const getInitials = (name) => {
    if (!name) return '?';
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className={`avatar ${className}`}>
      {src ? (
        <img src={src} alt={alt} />
      ) : (
        <div className="avatar-fallback">
          {fallback || getInitials(alt)}
        </div>
      )}
    </div>
  );
};

export default Avatar;