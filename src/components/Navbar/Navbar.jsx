import React from 'react'
import './Navbar.scss'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
                            <Link to={"blog"} className='navbar-nav-menu-a'>
                                <li>
                                    Contact Us
                                </li>
                            </Link>
                            <Link to={"login"}>
                                <button className='navbar-nav-menu-button'>
                                    Login
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}
