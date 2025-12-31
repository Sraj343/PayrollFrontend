import React, { useState } from 'react';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const [registerData, setRegisterData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [forgotEmail, setForgotEmail] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', { email, password });
        // Add login logic here
    };

    const handleRegister = (e) => {
        e.preventDefault();
        if (registerData.password !== registerData.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log('Register:', registerData);
        // Add register logic here
        setShowRegister(false);
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        console.log('Reset password for:', forgotEmail);
        // Add forgot password logic here
        setShowForgotPassword(false);
    };

    return (
        <div className="login-container">
            {!showRegister && !showForgotPassword && (
                <form onSubmit={handleLogin} className="login-form">
                    <h2>Login</h2>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                    <p><button type="button" onClick={() => setShowForgotPassword(true)}>Forgot Password?</button></p>
                    <p>Don't have an account? <button type="button" onClick={() => setShowRegister(true)}>Register</button></p>
                </form>
            )}

            {showRegister && (
                <form onSubmit={handleRegister} className="register-form">
                    <h2>Register</h2>
                    <input type="text" placeholder="Full Name" value={registerData.name} onChange={(e) => setRegisterData({...registerData, name: e.target.value})} required />
                    <input type="email" placeholder="Email" value={registerData.email} onChange={(e) => setRegisterData({...registerData, email: e.target.value})} required />
                    <input type="password" placeholder="Password" value={registerData.password} onChange={(e) => setRegisterData({...registerData, password: e.target.value})} required />
                    <input type="password" placeholder="Confirm Password" value={registerData.confirmPassword} onChange={(e) => setRegisterData({...registerData, confirmPassword: e.target.value})} required />
                    <button type="submit">Register</button>
                    <p><button type="button" onClick={() => setShowRegister(false)}>Back to Login</button></p>
                </form>
            )}

            {showForgotPassword && (
                <form onSubmit={handleForgotPassword} className="forgot-password-form">
                    <h2>Forgot Password</h2>
                    <input type="email" placeholder="Enter your email" value={forgotEmail} onChange={(e) => setForgotEmail(e.target.value)} required />
                    <button type="submit">Reset Password</button>
                    <p><button type="button" onClick={() => setShowForgotPassword(false)}>Back to Login</button></p>
                </form>
            )}
        </div>
    );
};

export default Login;