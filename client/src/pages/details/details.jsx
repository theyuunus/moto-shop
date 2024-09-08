import React, { useEffect, useState } from "react";
import './details.scss'
import { useParams } from "react-router-dom";
import { fetchData } from "../../services/api";
import Components from "../../components";
import { Helmet } from "react-helmet";

const Details = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchData(`/motos/${id}`)
                setData(response)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        loadData()
    }, [])

    if (loading) return <Components.Typography name='h1' className={"loading"}>Loading ...</Components.Typography>
    if (error) return <Components.Typography name='h1' className={"error"}>Error: {error}</Components.Typography>
    return (
        <div>
            <Helmet>
                <title>
                    Moto - {data.title}
                </title>
            </Helmet>
            <>
                <div>

                </div>
            </>
        </div>
    )
}

export default Details