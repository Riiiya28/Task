// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Login from './components/Login';
import MyAccount from './components/MyAccount';
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux'; // Redux to manage login state
import './styles.css';

const App = () => {
  const isLoggedIn = useSelector(state => state.isLoggedIn);

  return (
    <Router>
      <div>
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/myaccount"
            element={isLoggedIn ? <MyAccount /> : <Navigate to="/login" />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
