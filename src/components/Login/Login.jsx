import React, { useState } from 'react';
import './Login.scss';

export default function Login() {
    const [showFirstInputs, setShowFirstInputs] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const toggleInputs = () => {
        setShowFirstInputs((prev) => !prev);
    };

    const submitForm = () => {
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

        fetch('http://localhost:6060/user', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Response from the server:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
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
                            <>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className='login-left-inputs-input'
                                    required
                                />
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className='login-left-inputs-input'
                                    required
                                />
                                <button type='button' className='login-left-inputs-button'>
                                    Login
                                </button>
                            </>
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
