import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import HomeHeader from '../components/HomeHeader/HomeHeader'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
    </Helmet>
  )
}
