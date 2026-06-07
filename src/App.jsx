// MAIN APPS WRAPPER CONFIGURATION
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';

// 1. LANDING SCREEN COMPONENT
const LandingScreen = () => {
  const navigate = useNavigate();
  return (
    <div className="app-page landing-page">
      <div className="content-bottom">
        <h1 className="main-title">Welcome to PopX</h1>
        <p className="subtitle-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        
        <button className="btn btn-primary" onClick={() => navigate('/signup')}>
          Create Account
        </button>
        <button className="btn btn-secondary" onClick={() => navigate('/login')}>
          Already Registered? Login
        </button>
      </div>
    </div>
  );
};

// 2. LOGIN SCREEN COMPONENT
const LoginScreen = () => {
  const navigate = useNavigate();
  const [focusedField, setFocusedField] = useState('');

  return (
    <div className="app-page form-page">
      <h1 className="form-title">Signin to your PopX account</h1>
      <p className="subtitle-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>

      <div className="form-group-container">
        <div className={`custom-input-group ${focusedField === 'email' ? 'active' : ''}`}>
          <label>Email Address<span className="required">*</span></label>
          <input 
            type="email" 
            placeholder="Enter email address"
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField('')}
          />
        </div>

        <div className={`custom-input-group ${focusedField === 'password' ? 'active' : ''}`}>
          <label>Password<span className="required">*</span></label>
          <input 
            type="password" 
            placeholder="Enter password"
            onFocus={() => setFocusedField('password')}
            onBlur={() => setFocusedField('')}
          />
        </div>
      </div>

      <button className="btn btn-login-submit" onClick={() => navigate('/profile')}>
        Login
      </button>
    </div>
  );
};

// 3. SIGNUP SCREEN COMPONENT
const SignupScreen = () => {
  const navigate = useNavigate();
  const [focusedField, setFocusedField] = useState('');
  const [isAgency, setIsAgency] = useState('yes');

  return (
    <div className="app-page form-page">
      <h1 className="form-title">Create your PopX account</h1>

      <div className="form-group-container signup-fields">
        {[
          { label: 'Full Name', placeholder: 'Marry Doe', name: 'name' },
          { label: 'Phone number', placeholder: 'Marry Doe', name: 'phone' },
          { label: 'Email address', placeholder: 'Marry Doe', name: 'email' },
          { label: 'Password', placeholder: 'Marry Doe', name: 'password' },
          { label: 'Company name', placeholder: 'Marry Doe', name: 'company', required: false }
        ].map((field) => (
          <div key={field.name} className={`custom-input-group ${focusedField === field.name ? 'active' : ''}`}>
            <label>
              {field.label}{field.required !== false && <span className="required">*</span>}
            </label>
            <input 
              type={field.name === 'password' ? 'password' : 'text'} 
              placeholder={field.placeholder}
              onFocus={() => setFocusedField(field.name)}
              onBlur={() => setFocusedField('')}
            />
          </div>
        ))}

        <div className="agency-radio-section">
          <p className="radio-label">Are you an Agency?<span className="required">*</span></p>
          <div className="radio-options-row">
            <label className="radio-container">
              <input 
                type="radio" 
                name="agency" 
                value="yes" 
                checked={isAgency === 'yes'} 
                onChange={() => setIsAgency('yes')} 
              />
              <span className="radio-checkmark"></span>
              Yes
            </label>
            <label className="radio-container">
              <input 
                type="radio" 
                name="agency" 
                value="no" 
                checked={isAgency === 'no'} 
                onChange={() => setIsAgency('no')} 
              />
              <span className="radio-checkmark"></span>
              No
            </label>
          </div>
        </div>
      </div>

      <button className="btn btn-primary signup-btn" onClick={() => navigate('/profile')}>
        Create Account
      </button>
    </div>
  );
};

// 4. PROFILE SCREEN COMPONENT
const ProfileScreen = () => {
  return (
    <div className="app-page profile-page">
      <div className="header-bar">
        <h2>Account Settings</h2>
      </div>
      
      <div className="profile-container-inner">
        <div className="profile-card-header">
          <div className="avatar-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150" 
              alt="Marry Doe Avatar" 
              className="user-avatar"
            />
            <div className="camera-icon-badge">📷</div>
          </div>
          <div className="user-text-details">
            <h3>Marry Doe</h3>
            <p>Marry@Gmail.Com</p>
          </div>
        </div>

        <p className="profile-bio-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
        </p>
      </div>
      
      <div className="dotted-separator-line"></div>
    </div>
  );
};

// MAIN APPS WRAPPER CONFIGURATION
function App() {
  return (
    <div className="desktop-screen-wrapper">
      <div className="mobile-app-container">
        <Router>
          <Routes>
            <Route path="/" element={<LandingScreen />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<SignupScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;