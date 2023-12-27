import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import Blog from '../components/Blog/Blog'

export default function blog() {
  return (
    <Helmet title="Blog">
      <Blog />
    </Helmet>
  )
}
