import React from 'react'
import './HomeHeader.scss'
import { Link } from 'react-router-dom'

export default function HomeHeader() {
    return (
        <React.Fragment>
            <header className='header'>
                <div className='header-texts'>
                    <h1 className='header-texts-h1'>
                        Find your dream motorcycle here!
                    </h1>
                    <p className='header-texts-p'>
                        We have 100+ collections of new and used motorcycles from big names such as Honda, Kawasaki, Yamaha, Ducati, etc. We will give the best price you can get and great quality motorcycle.
                    </p>
                    <Link to={"showroom"}>
                        <h3 className='header-texts-h3'>
                            Let’s find one
                        </h3>
                    </Link>
                </div>
                <div className='header-backroundImg'>
                    <div className='header-backroundImg-linier'>

                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}
