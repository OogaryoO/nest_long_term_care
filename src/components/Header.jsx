import React from 'react';
import Button from './Button';
import './Header.css';

const Header = ({ onLogout }) => {
  return (
    <header className="header">
      <h1>Information Hub</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      {onLogout && (
        <div className="header-actions">
          <Button 
            onClick={onLogout}
            variant="outline"
            className="logout-button"
          >
            Logout
          </Button>
        </div>
      )}
    </header>
  );
};

export default Header;
