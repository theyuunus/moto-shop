import React from 'react';
import './navbar.scss';
import { Link, NavLink } from 'react-router-dom';
import Title from '../texts/title';
import Container from '../container/container';
import Button from '../button/button';

const Navbar = () => {
    return (
        <nav className="navbar">
            <Container>
                <div className="navbar__main">
                    <Link to="/" className="navbar__logo">
                        <Title>two wheelers</Title>
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
                            <Button>Login</Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
