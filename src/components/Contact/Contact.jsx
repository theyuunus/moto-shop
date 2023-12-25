import React, { useState } from 'react'
import './Contact.scss'
import Location from '../../images/ContactLocation.png'
import Button from '../Button/Button'

export default function Contact() {
    const [sendBot, setSendBot] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSendBot({ ...sendBot, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const token = '6755655775:AAEpsbO41QF2682IlXzDDEZ2iYy1mctW9MI';
            const chatId = '-1002128146883';

            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: `New message!\n\nName: ${sendBot.name}\nEmail: ${sendBot.email}\nMessage: ${sendBot.message}`,
                }),
            });

            const result = await response.json();
            console.log('Sent to Telegram:', result);
        } catch (error) {
            console.error('Error occurred:', error);
        }

        setSendBot({
            name: '',
            email: '',
            message: '',
        });
    }

    return (
        <React.Fragment>
            <div className='contact'>
                <div className='contact-left'>
                    <img className='contact-left-img' src={Location} alt="" />
                </div>
                <div className='contact-right'>
                    <div className='contact-right-media'>
                        <h1 className='contact-right-media-h1'>
                            Contact Us
                        </h1>
                        <div className='contact-right-media-info'>
                            <div className='contact-right-media-info-div'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_115_2333)">
                                        <path d="M20 3.33301C13.55 3.33301 8.33331 8.54967 8.33331 14.9997C8.33331 21.9497 15.7 31.533 18.7333 35.183C19.4 35.983 20.6166 35.983 21.2833 35.183C24.3 31.533 31.6666 21.9497 31.6666 14.9997C31.6666 8.54967 26.45 3.33301 20 3.33301ZM20 19.1663C17.7 19.1663 15.8333 17.2997 15.8333 14.9997C15.8333 12.6997 17.7 10.833 20 10.833C22.3 10.833 24.1666 12.6997 24.1666 14.9997C24.1666 17.2997 22.3 19.1663 20 19.1663Z" fill="#DB4C48" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_115_2333">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='contact-right-media-info-div-p'>
                                    2005 Broken Dream Blvd <br />
                                    Daytona Beach, FL 32122
                                </p>
                            </div>
                            <div className='contact-right-media-info-div'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <path d="M31.6625 33.3336C17.4431 33.3538 6.65149 22.4328 6.6667 8.33784C6.6667 7.41737 7.4129 6.66699 8.33337 6.66699H12.7323C13.5583 6.66699 14.2599 7.27387 14.3812 8.09087C14.6719 10.049 15.242 11.9553 16.0742 13.7515L16.2454 14.1212C16.4836 14.6352 16.3222 15.2459 15.8611 15.5751C14.4989 16.548 13.9782 18.5062 15.0395 20.0342C16.3713 21.9517 18.0501 23.6302 19.9671 24.9614C21.4951 26.0223 23.453 25.5018 24.4259 24.1397C24.7553 23.6785 25.3664 23.517 25.8807 23.7552L26.2487 23.9257C28.045 24.7578 29.9514 25.328 31.9097 25.6186C32.7268 25.7398 33.3334 26.4415 33.3334 27.2674V31.667C33.3334 32.5874 32.5853 33.3336 31.6649 33.3336L31.6625 33.3336Z" fill="#0DBE87" />
                                </svg>
                                <p className='contact-right-media-info-div-p'>
                                    <a className='contact-right-media-info-div-p-a'
                                        href="tel:">
                                        (343)-7509-2453
                                    </a>
                                </p>
                            </div>
                            <div className='contact-right-media-info-div'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                    <g clip-path="url(#clip0_115_2339)">
                                        <path d="M33.3333 6.66699H6.66665C4.83331 6.66699 3.33331 8.16699 3.33331 10.0003V30.0003C3.33331 31.8337 4.83331 33.3337 6.66665 33.3337H33.3333C35.1666 33.3337 36.6666 31.8337 36.6666 30.0003V10.0003C36.6666 8.16699 35.1666 6.66699 33.3333 6.66699ZM32.6666 13.7503L21.7666 20.567C20.6833 21.2503 19.3166 21.2503 18.2333 20.567L7.33331 13.7503C6.91665 13.4837 6.66665 13.0337 6.66665 12.5503C6.66665 11.4337 7.88331 10.767 8.83331 11.3503L20 18.3337L31.1666 11.3503C32.1166 10.767 33.3333 11.4337 33.3333 12.5503C33.3333 13.0337 33.0833 13.4837 32.6666 13.7503Z" fill="#04A7F2" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_115_2339">
                                            <rect width="40" height="40" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                <p className='contact-right-media-info-div-p'>
                                    <a className='contact-right-media-info-div-p-a'
                                        href="mailto:">
                                        twowheelers@xmail.com
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='contact-right-custom'>
                        <form className='contact-right-custom-form' onSubmit={handleSubmit}>
                            <input
                                type="text"
                                placeholder='Name'
                                className='contact-right-custom-form-input'
                                name="name"
                                value={sendBot.name}
                                onChange={handleInputChange}
                                required
                            />
                            <input
                                type="email"
                                placeholder='Email'
                                className='contact-right-custom-form-input'
                                name="email"
                                value={sendBot.email}
                                onChange={handleInputChange}
                                required
                            />
                            <textarea
                                placeholder='Message'
                                className='contact-right-custom-form-message'
                                name="message"
                                value={sendBot.message}
                                onChange={handleInputChange}
                                required
                            ></textarea>
                            <Button text={"Send"} />
                        </form>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
