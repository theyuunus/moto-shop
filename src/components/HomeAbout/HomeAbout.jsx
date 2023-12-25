import React from 'react'
import './HomeAbout.scss'
import Moto from '../../images/HomeAboutMoto.png'

export default function HomeAbout() {
    return (
        <React.Fragment>
            <div className='about'>
                <img
                    className='about-img'
                    src={Moto} alt=""
                />
                <div className='about-info'>
                    <h1 className='about-info-h1'>
                        Why us?
                    </h1>
                    <p className='about-info-p'>
                        Since 2019, twowheelers sells hundreds of motorcycles that are hot for the roads for a reasonable price. From low engine size to bigger engine, we have all. Want to enjoy the sunset on the road or you’re just a speed freak who likes to race against your friends on the racetrack? You’ll find the motorcycle that suits you.
                    </p>
                    <p className='about-info-p'>
                        Our employees are the best on the field with many experiences on a motorcycle and tons of knowledge about it, so come visit us and do not hesitate to ask us questions. We welcome those who are new with a motorcycle and wonder how it feels to explore places on a motorcycle.
                    </p>
                </div>
            </div>
        </React.Fragment>
    )
}
