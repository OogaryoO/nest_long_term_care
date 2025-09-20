import React from 'react';

const Button = ({ children, className = '', variant = 'primary', size = 'default', onClick, ...props }) => {
  const baseClass = 'btn';
  const variantClass = `btn-${variant}`;
  const sizeClass = size === 'sm' ? 'text-sm py-2 px-3' : size === 'lg' ? 'text-lg py-3 px-6' : '';
  
  const buttonClass = `${baseClass} ${variantClass} ${sizeClass} ${className}`.trim();

  return (
    <button className={buttonClass} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default Button;