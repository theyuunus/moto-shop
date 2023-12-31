import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import HomeAbout from '../components/HomeAbout/HomeAbout'
import HomeSection from '../components/HomeSection/HomeSection'
import HomeAds from '../components/HomeAds/HomeADS'

export default function Home() {
  return (
    <Helmet title="Home">
      <HomeHeader />
      <HomeAds />
      <HomeAbout />
      <HomeSection />
    </Helmet>
  )
}
