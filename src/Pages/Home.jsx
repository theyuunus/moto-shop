import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeAbout from '../components/HomeAbout/HomeAbout'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
      <HomeAbout />
    </Helmet>
  )
}
