import React, { useState, useEffect } from 'react';
import './Login.scss';
import axios from 'axios';

export default function Login() {
    const [showFirstInputs, setShowFirstInputs] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [user, setUser] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false); 

    const toggleInputs = () => {
        setShowFirstInputs((prev) => !prev);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const submitForm = async () => {
        if (password !== confirmPassword) {
            alert("Password and Confirm Password must match.");
            return;
        }

        const jsonData = {
            name: name,
            email: email,
            password: password,
            confirmPassword: confirmPassword
        };

        try {
            const response = await fetch('http://localhost:6060/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(jsonData),
            });

            const data = await response.json();
            alert('Registration success: ' + data.name); // Corrected alert message
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.get('http://localhost:6060/user');
            const data = response.data;
            const foundUser = data.find((item) => item.email === formData.email && item.password === formData.password);

            if (foundUser) {
                performLogin(foundUser);
            } else {
                alert('Login error: User not found');
            }
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('User'));
        if (storedUser) {
            setUser(storedUser);
            setIsLoggedIn(true);
        }
    }, []);

    const performLogin = (user) => {
        alert('Login successful: ' + user.name);
        setUser(user);
        setIsLoggedIn(true);
        localStorage.setItem('User', JSON.stringify(user));
    };

    return (
        <React.Fragment>
            <div className='login'>
                <div className='login-right'>
                    <h1 className='login-right-h1'>two wheelers</h1>
                    <div className='login-right-backImg'></div>
                </div>
                <div className='login-left'>
                    <h1 className='login-left-title'>Login</h1>
                    <h3 className='login-left-h3'>
                        {showFirstInputs ? (
                            <>
                                New visitor?{' '}
                                <span className='login-left-h3-span' onClick={toggleInputs}>
                                    Create your account
                                </span>{' '}
                                here
                            </>
                        ) : (
                            <>
                                Already have an account? <span className='login-left-h3-span' onClick={toggleInputs}>
                                    Login
                                </span> here
                            </>
                        )}
                    </h3>
                    <div className='login-left-inputs'>
                        {showFirstInputs ? (
                            <form className='login-left-inputs-form' onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="login-left-inputs-input"
                                    required
                                />
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    className="login-left-inputs-input"
                                    required
                                />
                                <button type="submit" className="login-left-inputs-button">
                                    Login
                                </button>
                            </form>

                        ) : (
                            <>
                                <input
                                    type='text'
                                    placeholder='Full name'
                                    className='login-left-inputs-input'
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='login-left-inputs-input'
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='login-left-inputs-input'
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                <input
                                    type='password'
                                    placeholder='Confirm Password'
                                    className='login-left-inputs-input'
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                <button
                                    type='button'
                                    onClick={submitForm}
                                    className='login-left-inputs-button'>
                                    Register Account
                                </button>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}