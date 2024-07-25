// src/components/Home.js
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const Home = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const profile = useSelector(state => state.profile);
  const employeeCode = useSelector(state => state.employeeCode);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn && (!profile.firstName || !profile.lastName || !profile.dob)) {
      const popupStatus = localStorage.getItem(`popupStatus_${employeeCode}`);
      const lastShown = localStorage.getItem(`popupLastShown_${employeeCode}`);
      const today = new Date().toLocaleDateString();

      if (popupStatus !== 'closed' && lastShown !== today) {
        setShowPopup(true);
        localStorage.setItem(`popupLastShown_${employeeCode}`, today);
      }
    }
  }, [isLoggedIn, profile, employeeCode]);

  const handleClosePopup = () => {
    setShowPopup(false);
    localStorage.setItem(`popupStatus_${employeeCode}`, 'closed');
  };

  const handleProfileClick = () => {
    setShowPopup(false);
    localStorage.setItem(`popupStatus_${employeeCode}`, 'closed');
    navigate('/profile');
  };

  return (
    <div>
      <h1>Welcome to InTech - Your Digital Transformation Partner</h1>
      <p>
        InTech is a leading IT & Digital Consultancy Software company,
        helping businesses of all sizes achieve their digital transformation
        goals. We offer a comprehensive suite of services, including:
      </p>
      <ul>
        <li>Software development</li>
        <li>Cloud migration and management</li>
        <li>Data analytics and business intelligence</li>
        <li>Cybersecurity solutions</li>
        <li>Digital marketing and strategy</li>
      </ul>
      <p>
        We leverage cutting-edge technologies to create innovative solutions
        that drive business growth and improve operational efficiency. Contact
        us today to learn how we can help you take your business to the next level.
      </p>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <span className="close" onClick={handleClosePopup}>&times;</span>
            <p>Your profile is incomplete. Please update your profile.</p>
            <button onClick={handleProfileClick}>Profile</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;