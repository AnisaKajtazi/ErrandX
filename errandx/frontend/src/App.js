import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode'; 

import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    const token = localStorage.getItem('token');

    if (storedUser && token) {
      const parsedUser = JSON.parse(storedUser);
      const decoded = jwtDecode(token); 
      const now = Date.now() / 1000;

      if (decoded.exp < now) {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
      } else {
        setUser(parsedUser);
        const timeout = (decoded.exp - now) * 1000;
        const timer = setTimeout(() => {
          setUser(null);
          localStorage.removeItem('user');
          localStorage.removeItem('token');
          alert('Session expired. Please login again.');
        }, timeout);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={user ? <Home user={user} setUser={setUser} /> : <Navigate to="/login" />}
        />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <LoginForm setUser={setUser} />}
        />
        <Route
          path="/register"
          element={user ? <Navigate to="/" /> : <RegisterForm />}
        />
      </Routes>
    </Router>
  );
}

export default App;
