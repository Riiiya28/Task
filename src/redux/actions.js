// src/redux/actions.js
import { LOGIN, LOGOUT, RAISE_QUERY, LOAD_QUERIES, UPDATE_PROFILE, LOAD_PROFILE } from './types';

export const login = (employeeCode, role) => ({
  type: LOGIN,
  payload: { employeeCode, role },
});

export const logout = () => ({
  type: LOGOUT,
});

export const raiseQuery = (employeeCode, query) => ({
  type: RAISE_QUERY,
  payload: { employeeCode, query },
});

export const loadQueries = (queries) => ({
  type: LOAD_QUERIES,
  payload: queries,
});

export const updateProfile = (profile) => ({
  type: UPDATE_PROFILE,
  payload: profile,
});

export const loadProfile = (employeeCode) => ({
  type: LOAD_PROFILE,
  payload: employeeCode,
});
