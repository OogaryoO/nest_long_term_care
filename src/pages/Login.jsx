import React, { useState } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import './Login.css';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation - just check if both fields are filled
    if (formData.username && formData.password) {
      onLogin(true);
    } else {
      alert('Please enter both username and password');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h1>Welcome to NEST</h1>
          <p>Long Term Care Services</p>
        </div>
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="Enter your username"
              value={formData.username}
              onChange={handleChange}
              className="login-input"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              className="login-input"
            />
          </div>
          
          <Button 
            type="submit" 
            className="login-button"
            variant="primary"
          >
            Login
          </Button>
        </form>
        
        <div className="login-footer">
          <p>Access your caregiving network</p>
        </div>
      </div>
    </div>
  );
};

export default Login;