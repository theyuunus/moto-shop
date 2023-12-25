import React, { useRef, useState } from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [isMenuActive, setMenuActive] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        menuRef.current.classList.toggle("menu_active");
        setMenuActive(!isMenuActive);
    };
    return (
        <React.Fragment>
            <nav className='navbar'>
                <div className='container'>
                    <div className='navbar-nav'>
                        <div className="navbar-nav-logo">
                            <Link to={"/"}>
                                <h1 className="navbar-nav-logo-h1">
                                    two wheelers
                                </h1>
                            </Link>
                        </div>
                        <div className='navbar-nav-menu'>
                            <Link to={"/"} className='navbar-nav-menu-a'>
                                <li>
                                    Home
                                </li>
                            </Link>
                            <Link to={"showroom"} className='navbar-nav-menu-a'>
                                <li>
                                    Motorcycles
                                </li>
                            </Link>
                            <Link to={"blog"} className='navbar-nav-menu-a'>
                                <li>
                                    Our Blog
                                </li>
                            </Link>
                            <Link to={"contact"} className='navbar-nav-menu-a'>
                                <li>
                                    Contact Us
                                </li>
                            </Link>
                            <Link to={"login"}>
                                <button className='navbar-nav-menu-button'>
                                    Login
                                </button>
                            </Link>
                            <div className='app_menu_icon' onClick={toggleMenu}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                                    <path d="M30 5.5L4.0794e-07 5.5" stroke="black" stroke-width="3" />
                                    <path d="M30 14.5L4.0794e-07 14.5" stroke="black" stroke-width="3" />
                                    <path d="M30 24.5L4.0794e-07 24.5" stroke="black" stroke-width="3" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <div className='app_navbar' ref={menuRef}>
                <div className='app_navbar-menu'>
                    <Link to={"/"} className='app_navbar-menu-a'>
                        <li>
                            Home
                        </li>
                    </Link>
                    <Link to={"showroom"} className='app_navbar-menu-a'>
                        <li>
                            Motorcycles
                        </li>
                    </Link>
                    <Link to={"blog"} className='app_navbar-menu-a'>
                        <li>
                            Our Blog
                        </li>
                    </Link>
                    <Link to={"contact"} className='app_navbar-menu-a'>
                        <li>
                            Contact Us
                        </li>
                    </Link>
                </div>
            </div>
        </React.Fragment>
    )
}
