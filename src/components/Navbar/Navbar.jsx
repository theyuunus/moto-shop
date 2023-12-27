import React, { useRef, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.scss';

export default function Navbar() {
    const [isMenuActive, setMenuActive] = useState(false);
    const menuRef = useRef(null);

    const closeMenu = () => {
        menuRef.current.classList.remove('menu_active');
        setMenuActive(false);
    };

    const toggleMenu = () => {
        if (isMenuActive) {
            closeMenu();
        } else {
            menuRef.current.classList.add('menu_active');
            setMenuActive(true);
        }
    };
    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar-nav'>
                        <div className="navbar-nav-logo">
                            <Link to={"/"} onClick={closeMenu}>
                                <h1 className="navbar-nav-logo-h1">
                                    two wheelers
                                </h1>
                            </Link>
                        </div>
                        <div className='navbar-nav-menu'>
                            <NavLink to={"/"}
                                className='navbar-nav-menu-a' onClick={closeMenu}>
                                <li>
                                    Home
                                </li>
                            </NavLink>
                            <NavLink to={"/showroom"} className='navbar-nav-menu-a' onClick={closeMenu}>
                                <li>
                                    Motorcycles
                                </li>
                            </NavLink>
                            <NavLink to={"/blog"} className='navbar-nav-menu-a' onClick={closeMenu}>
                                <li>
                                    Our Blog
                                </li>
                            </NavLink>
                            <NavLink to={"/contact"} className='navbar-nav-menu-a' onClick={closeMenu}>
                                <li>
                                    Contact Us
                                </li>
                            </NavLink>
                            <NavLink to={"/login"}
                                onClick={closeMenu}>
                                <button className='navbar-nav-menu-button'>
                                    Login
                                </button>
                            </NavLink >
                            <div className='app_menu_icon' onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M30 5.5L4.0794e-07 5.5" stroke="black" strokeWidth="3" />
                                    <path d="M30 14.5L4.0794e-07 14.5" stroke="black" strokeWidth="3" />
                                    <path d="M30 24.5L4.0794e-07 24.5" stroke="black" strokeWidth="3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='app_navbar' ref={menuRef}>
                <div className='app_navbar-menu'>
                    <NavLink to={"/"} activeClassName="active" className='app_navbar-menu-a' onClick={closeMenu}>
                        <li>
                            Home
                        </li>
                    </NavLink>
                    <NavLink to={"/showroom"} activeClassName="active" className='app_navbar-menu-a' onClick={closeMenu}>
                        <li>
                            Motorcycles
                        </li>
                    </NavLink>
                    <NavLink to={"/blog"} activeClassName="active" className='app_navbar-menu-a' onClick={closeMenu}>
                        <li>
                            Our Blog
                        </li>
                    </NavLink>
                    <NavLink to={"/contact"} activeClassName="active" className='app_navbar-menu-a' onClick={closeMenu}>
                        <li>
                            Contact Us
                        </li>
                    </NavLink>
                </div>
            </div>
        </React.Fragment>
    );
}
