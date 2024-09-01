import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import './login.scss';
import LoginImg from '../../images/login-img.png';
import Components from '../../components';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Moto - Login</title>
            </Helmet>

            <div className="login">
                <img
                    src={LoginImg}
                    alt="Login"
                    className="login__img"
                />

                <div className="login__context">
                    <Components.Typography
                        name="h1"
                        color="#252C33"
                    >
                        Login
                    </Components.Typography>
                    <Components.Typography color="#252C33">
                        New visitor? <Link to="/register" className="login__context-link">Create your account</Link> here
                    </Components.Typography>

                    <form className="login__context-form">
                        <input
                            type="email"
                            placeholder="Email"
                            className="login__context-form-input"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="login__context-form-input"
                        />

                        <Components.Button className="login__context-form-button">
                            Login
                        </Components.Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
