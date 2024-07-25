// src/redux/reducers.js
import { LOGIN, LOGOUT, RAISE_QUERY, LOAD_QUERIES, UPDATE_PROFILE, LOAD_PROFILE } from './types';

const initialState = {
  isLoggedIn: false,
  employeeCode: null,
  role: null,
  queries: [],
  profiles: JSON.parse(localStorage.getItem('profiles')) || {},
  profile: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        employeeCode: action.payload.employeeCode,
        role: action.payload.role,
        profile: state.profiles[action.payload.employeeCode] || {},
      };
    case LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        employeeCode: null,
        role: null,
        profile: {},
      };
    case RAISE_QUERY:
      const newQuery = {
        employeeCode: action.payload.employeeCode,
        query: action.payload.query,
      };
      const updatedQueries = [...state.queries, newQuery];
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
    case UPDATE_PROFILE:
      const updatedProfiles = {
        ...state.profiles,
        [action.payload.employeeCode]: action.payload,
      };
      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
      return {
        ...state,
        profiles: updatedProfiles,
        profile: action.payload,
      };
    case LOAD_PROFILE:
      const loadedProfiles = JSON.parse(localStorage.getItem('profiles')) || {};
      return {
        ...state,
        profile: loadedProfiles[action.payload] || {},
      };
    default:
      return state;
  }
};

export default authReducer;