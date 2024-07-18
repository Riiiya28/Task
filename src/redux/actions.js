// src/redux/actions.js

import { LOGIN, LOGOUT, RAISE_QUERY, LOAD_QUERIES } from './types';

export const login = (employeeCode, role) => ({
  type: LOGIN,
  payload: { employeeCode, role }
});

export const logout = () => ({
  type: LOGOUT,
});

export const raiseQuery = (query) => ({
  type: RAISE_QUERY,
  payload: query,
});

export const loadQueries = (queries) => ({
  type: LOAD_QUERIES,
  payload: queries,
});
