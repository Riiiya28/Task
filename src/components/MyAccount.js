// src/components/MyAccount.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { logout, raiseQuery } from '../redux/actions';

const MyAccount = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  const employeeCode = useSelector(state => state.employeeCode);
  const role = useSelector(state => state.role);
  const queries = useSelector(state => state.queries);
  const [query, setQuery] = useState('');
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    return <Navigate to="/login" />;
  };

  const handleRaiseQuery = () => {
    if (query.trim() === '') {
      alert('Query cannot be empty.');
      return;
    }

    const newQuery = { employeeCode, query };
    dispatch(raiseQuery(newQuery));
    setQuery('');
  };

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  const filteredQueries = role === 'ADMIN' ? queries : queries.filter(q => q.employeeCode === employeeCode);

  return (
    <div>
      <h2>My Account</h2>
      {role === 'MEMBER' && (
        <div>
          <h3>Raise a Query</h3>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button onClick={handleRaiseQuery}>Submit</button>
        </div>
      )}
      <h3>Queries</h3>
      <ul>
        {filteredQueries.map((q, index) => (
          <li key={index}>
            {q.employeeCode}: {q.query}
          </li>
        ))}
      </ul>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MyAccount;
