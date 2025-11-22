import React from 'react';

const Home = ({ user, setUser }) => {

const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
};


  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Welcome, {user.fullName}</h2>
      <button 
        onClick={handleLogout} 
        style={{ marginTop: '20px', padding: '10px 20px' }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
