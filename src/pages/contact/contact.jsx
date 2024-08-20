import React from 'react';
import { Helmet } from 'react-helmet';
import Title from '../../components/texts/title';
import Text from '../../components/texts/text';
import LocationImg from '../../images/contact-location.png';
import Button from '../../components/button/button';
import './contact.scss';

const Contact = () => {
    return (
        <>
            <Helmet>
                <title>Moto | Contact</title>
            </Helmet>

            <div className="contact">
                <img src={LocationImg} alt="Location" className="contact__image" />

                <div className="contact__info">
                    <Title>Contact Us</Title>

                    <Text color="rgb(37, 44, 51)" fontSize={22}>
                        2005 Broken Dream Blvd <br />
                        Daytona Beach, FL 32122
                    </Text>

                    <a href="tel:34375092453" className="contact__info-text">
                        (343)-7509-2453
                    </a>

                    <a href="mailto:twowheelers@xmail.com" className="contact__info-text">
                        twowheelers@xmail.com
                    </a>

                    <form className="contact__info-form">
                        <input
                            type="text"
                            placeholder="Name"
                            className="contact__info-form-input"
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="contact__info-form-input"
                            required
                        />

                        <textarea
                            placeholder="Message"
                            className="contact__info-form-textarea"
                            required
                        ></textarea>

                        <Button className="contact__info-form-button">
                            Send
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
