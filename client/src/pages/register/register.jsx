import React from 'react'
import './register.scss'
import { Helmet } from 'react-helmet'
import LoginImg from '../../images/login-img.png';
import Components from '../../components';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <>
            <Helmet>
                <title>Moto - Register</title>
            </Helmet>

            <div className="register">
                <img
                    src={LoginImg}
                    alt="Login"
                    className="register__img"
                />

                <div className="register__context">
                    <Components.Typography
                        name="h1"
                        color="#252C33"
                    >
                        Create an account
                    </Components.Typography>
                    <Components.Typography color="#252C33">
                        Already have an account? <Link to="/login" className="register__context-link">Login</Link>  here
                    </Components.Typography>

                    <form className="register__context-form">
                        <input
                            type="text"
                            placeholder="Full name"
                            className="register__context-form-input"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="register__context-form-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="register__context-form-input"
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="register__context-form-input"
                        />

                        <label className='register__context-form-label'>
                            <input type="checkbox"></input>
                            <span>I agree to store’s Terms and Conditions</span>
                        </label>

                        <Components.Button className="login__context-form-button">
                            Register Account
                        </Components.Button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Register