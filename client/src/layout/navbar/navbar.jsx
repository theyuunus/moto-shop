import React from 'react';
import './navbar.scss';
import Components from '../../components/index';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Components.Container>
                <div className="navbar__main">
                    <Link to="/" className="navbar__logo">
                        <Components.Typography name='h1'>two wheelers</Components.Typography>
                    </Link>

                    <div className="navbar__links">
                        <NavLink to="/" className="navbar__link">
                            Home
                        </NavLink>
                        <NavLink to="/showroom" className="navbar__link">
                            Motorcycles
                        </NavLink>
                        <NavLink to="/blog" className="navbar__link">
                            Our Blog
                        </NavLink>
                        <NavLink to="/contact-us" className="navbar__link">
                            Contact Us
                        </NavLink>
                        <Link to="/login" className="navbar__button">
                            <Components.Button>Login</Components.Button>
                        </Link>
                    </div>
                </div>
            </Components.Container>
        </nav>
    );
};

export default Navbar;
