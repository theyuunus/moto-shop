import React from 'react';
import './home.scss';
import { Helmet } from 'react-helmet';
import homeHeader from '../../images/home-header.png';
import { Link } from 'react-router-dom';
import HomeAbout from '../../images/home-about.png';
import showroom1 from '../../images/home-showroom1.png';
import showroom2 from '../../images/home-showroom2.png';
import showroom3 from '../../images/home-showroom3.png';
import showroom4 from '../../images/home-showroom4.png';
import showroom5 from '../../images/home-showroom5.png';
import Components from '../../components';

const Home = () => {
    const services = [
        { title: 'Our Showroom', image: showroom1 },
        { title: 'Test Ride', image: showroom2 },
        { title: 'Our Service', image: showroom3 },
        { title: 'Custom Parts', image: showroom4 },
        { title: 'Finance', image: showroom5 },
    ];

    return (
        <>
            <Helmet>
                <title>Moto - Home</title>
            </Helmet>

            <header className="home__header">
                <div className="home__header-content">
                    <Components.Typography name='h1'>
                        Find your dream motorcycle <br /> here!
                    </Components.Typography>
                    <Components.Typography>
                        We have 100+ collections of new and used motorcycles from big names such as Honda, Kawasaki, Yamaha, Ducati, etc. We offer the best prices and great quality motorcycles.
                    </Components.Typography>
                    <Link to="/showroom" className="home__header-link">
                        Let’s find one
                    </Link>
                </div>
                <div className="home__header-image">
                    <img src={homeHeader} alt="Home Header" />
                </div>
            </header>

            <section className="home__ads">
                <div className="home__ads-background">
                    <div className="home__ads-content">
                        <Components.Typography name='h1' color="rgb(37, 44, 51)" className="home__ads-title">
                            Get Ready for Your <br /> Summer Ride
                        </Components.Typography>
                        <Components.Typography as="h2" color="rgb(37, 44, 51)">
                            Save up to 20% on your <br /> purchase this summer
                        </Components.Typography>
                        <Components.Typography color="rgb(37, 44, 51)">
                            Valid until August 31, 2022
                        </Components.Typography>
                    </div>
                </div>
            </section>

            <section className="home__about">
                <Components.Container>
                    <div className="home__about-content">
                        <img src={HomeAbout} alt="Home About" className="home__about-image" />
                        <div className="home__about-texts">
                            <Components.Typography as="h3" className="home__about-title">
                                Why Us?
                            </Components.Typography>
                            <Components.Typography>
                                Since 2019, Twowheelers has sold hundreds of motorcycles that are perfect for the roads at reasonable prices. From small engines to larger ones, we have it all. Whether you want to enjoy the sunset on the road or race against friends on the track, you'll find the motorcycle that suits you.
                            </Components.Typography>
                            <Components.Typography>
                                Our employees are experts in the field with extensive experience and knowledge about motorcycles. Come visit us and feel free to ask questions. We welcome newcomers who are curious about exploring places on a motorcycle.
                            </Components.Typography>
                        </div>
                    </div>
                </Components.Container>
            </section>

            <section className="home__service">
                <Components.Container>
                    <div className="home__service-grid">
                        {services.map((service, index) => (
                            <div key={index} className="home__service-card">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="home__service-card-img"
                                />
                                <div className="home__service-card-overlay">
                                    <Components.Typography as="h3">{service.title}</Components.Typography>
                                </div>
                            </div>
                        ))}
                    </div>
                </Components.Container>
            </section>
        </>
    );
};

export default Home;
