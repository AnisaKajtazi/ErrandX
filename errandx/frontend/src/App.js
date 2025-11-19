import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import UserDashboard from './components/UserDashboard';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          {/* Rruga kryesore shkon tek dashboard */}
          <Route path="/" element={<Navigate to="/dashboard" />} />
          
          {/* Dashboard për user */}
          <Route path="/dashboard" element={<UserDashboard />} />
          
          {/* Në të ardhmen mund të shtoni rutes për login, register, task details etj */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
