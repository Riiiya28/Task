// src/redux/reducers.js

import { LOGIN, LOGOUT, RAISE_QUERY, LOAD_QUERIES } from './types';

const initialState = {
  isLoggedIn: false,
  employeeCode: null,
  role: null,
  queries: [],
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        employeeCode: action.payload.employeeCode,
        role: action.payload.role,
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        employeeCode: null,
        role: null,
        queries: [],
      };
    case RAISE_QUERY:
      const updatedQueries = [...state.queries, action.payload];
      localStorage.setItem('queries', JSON.stringify(updatedQueries));
      return {
        ...state,
        queries: updatedQueries,
      };
    case LOAD_QUERIES:
      return {
        ...state,
        queries: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
