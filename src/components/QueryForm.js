// src/components/QueryForm.js

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { raiseQuery } from '../redux/actions';

const QueryForm = () => {
  const dispatch = useDispatch();
  const employeeCode = useSelector(state => state.employeeCode);
  const [query, setQuery] = useState('');

  const handleSubmit = () => {
    if (query.trim() === '') {
      alert('Query cannot be empty.');
      return;
    }

    dispatch(raiseQuery({ employeeCode, query }));
    setQuery('');
  };

  return (
    <div>
      <h3>Raise a Query</h3>
      <textarea value={query} onChange={(e) => setQuery(e.target.value)} />
      <br />
      <button onClick={handleSubmit}>Submit Query</button>
    </div>
  );
};

export default QueryForm;
