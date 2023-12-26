import React from 'react'
import './HomeSection.scss'

export default function HomeSection() {
    return (
        <React.Fragment>
            <section className='section'>
                <div className='section-showroom'>
                    <h1 className='section-showroom-h1'>
                        OUR SHOWROOM
                    </h1>
                </div>
                    <div className='section-custom'>
                        <div className='section-custom-testRide'>
                            <h1 className='section-custom-testRide-h1'>
                                TEST RIDE
                            </h1>
                        </div>
                        <div className='section-custom-service'>
                            <h1 className='section-custom-service-h1'>
                                OUR SERVICE
                            </h1>
                        </div>
                        <div className='section-custom-parts'>
                            <h1 className='section-custom-parts-h1'>
                                CUSTOM PARTS
                            </h1>
                        </div>
                        <div className='section-custom-finance'>
                            <h1 className='section-custom-finance-h1'>
                                FINANCE
                            </h1>
                        </div>
                    </div>
            </section>
        </React.Fragment>
    )
}
