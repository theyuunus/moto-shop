import React from 'react'
import './not-found.scss'
import Title from '../../components/texts/title'
import Text from '../../components/texts/text'
import { Link } from 'react-router-dom'
import notFound from '../../images/not-found.png'
import { Helmet } from 'react-helmet'

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>Moto - Not Found</title>
            </Helmet>

            <div className='notFound'>
                <div className='notFound-content'>
                    <div className='notFound-titles'>
                        <Title
                            color='rgba(37, 44, 51, 1)' className='notFound-title'
                        >Oops....</Title>
                        <Title
                            color='rgba(37, 44, 51, 1)'
                            as='h2'
                            className='notFound-subtitle'
                        >Page not found</Title>
                    </div>

                    <Text
                        color='rgba(37, 44, 51, 1)'
                        className='notFound-text'
                    >Unfortunately, the page you’re looking for is either under maintenance, unaccessible, or there’s a server problem in our site. Please go back to home page.
                    </Text>

                    <Link to="/" className='notFound-link'>
                        Go back to Home
                    </Link>
                </div>

                <div className='notFound-image-container'>
                    <img src={notFound} alt="Not Found" className='notFound-image' />
                </div>
            </div>
        </>
    )
}

export default NotFound
