import React from 'react'
import './404.scss'
import { Link } from 'react-router-dom'

export default function NotFound() {
    return (
        <React.Fragment>
            <main className='main'>
                <div className='main-text'>
                    <h1 className='main-text-h1'>Oops....</h1>
                    <h2 className='main-text-h2'>Page not found</h2>
                    <p className='main-text-p'>
                        Unfortunately, the page you’re looking for is either under maintenance, unaccessible, or there’s a server problem in our site. Please go back to home page.
                    </p>
                    <Link className='main-text-link' to={"/"}>Go back to Home</Link>
                </div>
                <div className='main-back_img'>

                </div>
            </main>
        </React.Fragment>
    )
}
