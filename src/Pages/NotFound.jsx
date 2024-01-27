import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import NotFound from '../components/404/404'

export default function notFound() {
  return (
    <Helmet title="404">
      <NotFound />
    </Helmet>
  )
}
