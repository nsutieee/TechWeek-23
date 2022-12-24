import React from 'react'
import Events from '../EventCard/events'
import Sponsors from '../Sponsors/Sponsors'
import { Fade } from 'react-reveal'
import Header from '../Header/Header'
import Footers from '../FooterS/Footers'
import Home from '../LandingPage/Home'
import Timeline from '../timeline/timeline'
import PastSponsor from '../pastSponsors/pastSponsors'


function HomeScreen() {
  return (
    <>
    {/* <particleBackground/> */}
    <Home/>
    <Header/>
    <Fade up><Events/></Fade>
    <Fade up><Sponsors/></Fade>
    <Fade up><PastSponsor/></Fade>    
    <Timeline/>
    <Footers/>
    </>
  )
};

export default HomeScreen;