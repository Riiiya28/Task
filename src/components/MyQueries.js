// src/components/MyQueries.js

import React from 'react';
import { useSelector } from 'react-redux';

const MyQueries = () => {
  const employeeCode = useSelector(state => state.employeeCode);
  const queries = useSelector(state => state.queries);

  const myQueries = queries.filter(q => q.employeeCode === employeeCode);

  return (
    <div>
      <h3>My Queries</h3>
      <ul>
        {myQueries.map((query, index) => (
          <li key={index}>{query.query}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyQueries;
