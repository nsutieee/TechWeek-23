import React from 'react'
import Events from '../EventCard/events'
import FooterSsn from '../FooterSsn'

import NavBar from '../NavBar'
import Sponsors from '../Sponsors/Sponsors'
import Timeline from '../Timeline/Timeline'
import Header from '../Header/Header'
import Footers from '../FooterS/Footers'
import Home from '../LandingPage/Home'


function HomeScreen() {
  return (
    <>
    <Home/>
    <Header/>
    <Events/>
    {/* <Timeline/> */}
    <Sponsors/>
    <Footers/>
    </>
  )
};

export default HomeScreen;