// src/components/MyAccount.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout, raiseQuery } from '../redux/actions';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const employeeCode = useSelector(state => state.employeeCode);
  const role = useSelector(state => state.role);
  const queries = useSelector(state => state.queries);
  const [query, setQuery] = useState('');

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  const handleRaiseQuery = () => {
    if (!query.trim()) {
      alert('Query cannot be empty.');
      return;
    }
    dispatch(raiseQuery(employeeCode, query));
    setQuery('');
  };

  const handleProfile = () => {
    navigate('/profile');
  };

  return (
    <div>
      <h2>My Account</h2>
      <p>Welcome, {employeeCode} ({role})</p>
      
      <div>
        <h3>Raise a Query</h3>
        <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
        <br />
        <button onClick={handleRaiseQuery}>Submit Query</button>
      </div>
      <div>
        <h3>Queries</h3>
        {queries.length === 0 ? (
          <p>No queries raised yet.</p>
        ) : (
          <ul>
            {queries.map((q, index) => (
              <li key={index}>
                <strong>{q.employeeCode}:</strong> {q.query}
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleProfile}>Profile</button>      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccount;