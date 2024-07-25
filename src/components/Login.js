// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login, loadQueries } from '../redux/actions';
import userRoles from '../userRolesConfig';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [employeeCode, setEmployeeCode] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!employeeCode || !password) {
      alert('Please enter both Employee Code and Password.');
      return;
    }

    if (employeeCode === password) {
      alert('Password cannot be the same as Employee Code.');
      return;
    }

    if (!(employeeCode in userRoles)) {
      alert('Invalid Employee Code. Please try again.');
      return;
    }

    // Check if matches '12346'
    if (password !== '12346') {
      alert('Incorrect password. Please try again.');
      return;
    }

    dispatch(login(employeeCode, userRoles[employeeCode]));

    const savedQueries = JSON.parse(localStorage.getItem('queries')) || [];
    dispatch(loadQueries(savedQueries));

    navigate('/myaccount');
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Employee Code:
          <input type="text" value={employeeCode} onChange={(e) => setEmployeeCode(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit" onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
