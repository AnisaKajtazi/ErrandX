import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userService from '../services/userService';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: ""
    });

    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const data = await userService.register(formData);
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        setMessage("User registered successfully!");
        setTimeout(() => navigate('/'), 1000);
    } catch (err) {
        setMessage(err.response?.data?.error || "Registration failed");
    }
};


    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h2>Register</h2>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "0 auto" }}>
                <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
                <input name="username" placeholder="Username" onChange={handleChange} required />
                <input name="email" placeholder="Email" onChange={handleChange} required />
                <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
                <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
                <input name="address" placeholder="Address" onChange={handleChange} />
                <button type="submit">Register</button>
            </form>

            {message && <p style={{ marginTop: "10px" }}>{message}</p>}

            <button 
                style={{ marginTop: "20px", padding: "8px 16px" }}
                onClick={() => navigate('/login')}
            >
                Already have an account? Login
            </button>
        </div>
    );
};

export default RegisterForm;
