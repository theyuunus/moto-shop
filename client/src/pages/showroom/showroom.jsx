import React, { useEffect, useState } from 'react'
import './showroom.scss'
import { Helmet } from 'react-helmet'
import { fetchData } from '../../services/api'
import Components from '../../components'

const Showroom = () => {
    // const [data, setData] = useState([0])
    // const [loading, setLoading] = useState(true)
    // const [error, setError] = useState(true)

    // useEffect(() => {
    //     const loadData = async () => {
    //         try {
    //             const response = await fetchData('/')
    //             setData(response)
    //         } catch (err) {
    //             setError(err.massage)
    //         } finally {
    //             setLoading(false)
    //         }
    //     }

    //     loadData()
    // }, [])

    // if (loading) return <Components.Typography name='h1' className={"loading"}>Loading ...</Components.Typography>
    // if (error) return <Components.Typography name='h1' className={"error"}>Error: {error}</Components.Typography>
    return (
        <>
            <Helmet>
                <title>Moto - Showroom</title>
            </Helmet>

            <div className='showroom'>
                <div className='showroom__context'>

                    <div className='showroom__context-cards'>
                        {/* {data.map((item) =>{ */}
                        <Components.Card
                            img={"image if card"}
                            imgTitle={"title of image"}
                            title={"Suzuki GSX-R1000 (2004)"}
                            type={"Used"}
                            price={"6,899"}
                            stock={1}
                            color={"Blue/White"}
                            link={"#"}
                        />
                        {/* })} */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Showroom