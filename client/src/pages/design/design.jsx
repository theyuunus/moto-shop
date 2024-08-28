import React from 'react'
import { Helmet } from 'react-helmet'
import Components from '../../components'

const Design = () => {
    return (
        <>
            <Helmet>
                <title>Moto - Design</title>
            </Helmet>
            <Components.Container>
                <Components.Button>
                    button component
                </Components.Button>

               <Components.Typography>
                Lorem, ipsum dolor.
               </Components.Typography>

                <Components.Card
                    title={"Triumph Street Triple R (2020)"}
                    type={"New"}
                    price={"6,899"}
                    stock={5}
                    color={"green, blue"}
                />
            </Components.Container>
        </>
    )
}

export default Design