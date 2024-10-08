import React from 'react';
import './footer.scss';
import Components from '../../components/index';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <Components.Container>
                <div className="footer__main">
                    <section className="footer__section">
                        <Components.Typography name='h1'>two wheelers</Components.Typography>
                        <Components.Typography>
                            2005 Broken Dream Blvd <br />
                            Daytona Beach, FL 32122
                        </Components.Typography>
                        <a href="tel:(343)-7509-2453" className="footer__link">
                            (343)-7509-2453
                        </a>
                    </section>

                    <section className="footer__section">
                        <Link to="/new-inventory" className="footer__link">
                            New Inventory
                        </Link>
                        <Link to="/used-inventory" className="footer__link">
                            Used Inventory
                        </Link>
                        <Link to="/service-center" className="footer__link">
                            Service Center
                        </Link>
                        <Link to="/custom-parts" className="footer__link">
                            Custom Parts
                        </Link>
                        <Link to="/riding-tips" className="footer__link">
                            Riding Tips
                        </Link>
                    </section>

                    <section className="footer__section">
                        <Link to="/test-ride" className="footer__link">
                            Test Ride
                        </Link>
                        <Link to="/finance" className="footer__link">
                            Finance
                        </Link>
                        <Link to="/blog" className="footer__link">
                            Our Blog
                        </Link>
                        <Link to="/about-us" className="footer__link">
                            About Us
                        </Link>
                        <Link to="/media" className="footer__link">
                            Media
                        </Link>
                    </section>

                    <section className="footer__section">
                        <Components.Typography name='h3'>STORE HOURS</Components.Typography>
                        <Components.Typography>
                            Weekdays: 8 AM - 3 PM <br /><br />
                            Saturday: 8 AM - 2 PM <br /><br />
                            Sunday/National Holiday: Closed
                        </Components.Typography>
                    </section>
                </div>

                <div className="footer__bottom">
                    <Components.Typography>
                        &copy; {new Date().getFullYear()} TwoWheelers.com. All rights reserved
                    </Components.Typography>
                </div>
            </Components.Container>
        </footer>
    );
};

export default Footer;
