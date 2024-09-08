import React, { useEffect, useState } from 'react'
import './blog.scss'
import { Helmet } from 'react-helmet'
import Components from '../../components'
import { fetchData } from '../../services/api'

const Blog = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await fetchData('/blogs')
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
        <>
            <Helmet>
                <title>Moto | Blog</title>
            </Helmet>

            <div className='blog'>
                <article className='blog__context'>
                    {data.map((blog) => (
                        <div className='blog__context-card' key={blog.id}>
                            <img
                                src={blog.img}
                                alt="Images of blog"
                                className='blog__context-card-img'
                            />

                            <div className='blog__context-card-texts'>
                                <div className='blog__context-card-texts-div'>
                                    <Components.Typography
                                        name='h1'
                                        className='blog__context-card-texts-title'
                                        color='#252C33'
                                    >
                                        {blog.title}
                                    </Components.Typography>

                                    <Components.Typography
                                        className='blog__context-card-texts-text'
                                        color='#252C33'
                                    >
                                        {blog.date}
                                    </Components.Typography>
                                </div>

                                <Components.Typography
                                    className='blog__context-card-texts-text'
                                    color='#252C33'
                                >
                                    {blog.text}
                                </Components.Typography>
                            </div>
                        </div>
                    ))}
                </article>
            </div>
        </>
    )
}

export default Blog