// src/components/AllQueries.js

import React from 'react';
import { useSelector } from 'react-redux';

const AllQueries = () => {
  const queries = useSelector(state => state.queries);

  return (
    <div>
      <h3>All Queries</h3>
      <ul>
        {queries.map((query, index) => (
          <li key={index}>
            <strong>{query.employeeCode}</strong>: {query.query}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllQueries;
