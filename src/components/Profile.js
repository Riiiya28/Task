// src/components/Profile.js
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile, loadProfile, logout } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeeCode = useSelector(state => state.employeeCode);
  const profile = useSelector(state => state.profile);
  const [firstName, setFirstName] = useState(profile.firstName || '');
  const [lastName, setLastName] = useState(profile.lastName || '');
  const [dob, setDob] = useState(profile.dob || '');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!employeeCode) {
      navigate('/login');
    } else {
      dispatch(loadProfile(employeeCode));
    }
  }, [employeeCode, dispatch, navigate]);

  const handleSave = () => {
    if (!firstName || !lastName || !dob) {
      setError('All fields are required.');
    } else {
      dispatch(updateProfile({ employeeCode, firstName, lastName, dob }));
      setError('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <div>
      <h2>Profile</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          First Name:
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </label>
        <br />
        <label>
          Last Name:
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </label>
        <br />
        <label>
          Date of Birth:
          <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
        </label>
        <br />
        <button type="submit" onClick={handleSave}>Save</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <h3>Profile Details</h3>
      <p><strong>First Name:</strong> {firstName}</p>
      <p><strong>Last Name:</strong> {lastName}</p>
      <p><strong>Date of Birth:</strong> {dob}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Profile;