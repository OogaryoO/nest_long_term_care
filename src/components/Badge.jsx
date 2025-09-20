import React from 'react';

const Badge = ({ children, className = '', variant = 'secondary', onClick, ...props }) => {
  const baseClass = 'badge';
  const variantClass = `badge-${variant}`;
  
  const badgeClass = `${baseClass} ${variantClass} ${className}`.trim();

  return (
    <span className={badgeClass} onClick={onClick} {...props}>
      {children}
    </span>
  );
};

export default Badge;