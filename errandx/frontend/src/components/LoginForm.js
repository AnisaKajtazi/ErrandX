import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import userService from '../services/userService';

const LoginForm = ({ setUser }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = await userService.login(username, password);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setUser(data.user);
    } catch (err) {
        setError(err.response?.data?.error || "Login failed");
    }
};


    return (
        <div>
            <h2>Login</h2>

            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                {error && <p style={{ color: "red" }}>{error}</p>}

                <button type="submit">Login</button>
            </form>

            <button 
                style={{ marginTop: "10px" }} 
                onClick={() => navigate('/register')}
            >
                Create an Account
            </button>
        </div>
    );
};

export default LoginForm;
