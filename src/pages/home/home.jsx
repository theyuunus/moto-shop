import React from 'react';
import './home.scss';
import { Helmet } from 'react-helmet';
import Title from '../../components/texts/title';
import Text from '../../components/texts/text';
import homeHeader from '../../images/home-header.png';
import { Link } from 'react-router-dom';
import Container from '../../components/container/container';
import HomeAbout from '../../images/home-about.png';
import showroom1 from '../../images/home-showroom1.png';
import showroom2 from '../../images/home-showroom2.png';
import showroom3 from '../../images/home-showroom3.png';
import showroom4 from '../../images/home-showroom4.png';
import showroom5 from '../../images/home-showroom5.png';

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
                    <Title>
                        Find your dream motorcycle <br /> here!
                    </Title>
                    <Text>
                        We have 100+ collections of new and used motorcycles from big names such as Honda, Kawasaki, Yamaha, Ducati, etc. We offer the best prices and great quality motorcycles.
                    </Text>
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
                        <Title color="rgb(37, 44, 51)" className="home__ads-title">
                            Get Ready for Your <br /> Summer Ride
                        </Title>
                        <Title as="h2" color="rgb(37, 44, 51)">
                            Save up to 20% on your <br /> purchase this summer
                        </Title>
                        <Text color="rgb(37, 44, 51)">
                            Valid until August 31, 2022
                        </Text>
                    </div>
                </div>
            </section>

            <section className="home__about">
                <Container>
                    <div className="home__about-content">
                        <img src={HomeAbout} alt="Home About" className="home__about-image" />
                        <div className="home__about-texts">
                            <Title as="h3" className="home__about-title">
                                Why Us?
                            </Title>
                            <Text>
                                Since 2019, Twowheelers has sold hundreds of motorcycles that are perfect for the roads at reasonable prices. From small engines to larger ones, we have it all. Whether you want to enjoy the sunset on the road or race against friends on the track, you'll find the motorcycle that suits you.
                            </Text>
                            <Text>
                                Our employees are experts in the field with extensive experience and knowledge about motorcycles. Come visit us and feel free to ask questions. We welcome newcomers who are curious about exploring places on a motorcycle.
                            </Text>
                        </div>
                    </div>
                </Container>
            </section>

            <section className="home__service">
                <Container>
                    <div className="home__service-grid">
                        {services.map((service, index) => (
                            <div key={index} className="home__service-card">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="home__service-card-img"
                                />
                                <div className="home__service-card-overlay">
                                    <Title as="h3">{service.title}</Title>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Home;
