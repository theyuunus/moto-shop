import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeAbout from '../components/HomeAbout/HomeAbout'
import HomeSection from '../components/HomeSection/HomeSection'
import HomeADS from '../components/HomeAds/HomeADS'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
      <HomeADS />
      <HomeAbout />
      <HomeSection />
    </Helmet>
  )
}
