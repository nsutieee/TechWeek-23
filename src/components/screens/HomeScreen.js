import React from 'react'
import Events from '../EventCard/events'
//import Sponsors from '../Sponsors/Sponsors'
import { Fade } from 'react-reveal'
import Header from '../Header/Header'
import Footers from '../FooterS/Footers'
import Home from '../LandingPage/Home'
import Timeline from '../timeline/timeline'
import PastSponsor from '../pastSponsors/pastSponsors'
import AnnouncingSponsors from '../Sponsors/AnnouncingSponsors'
import HamburgerMenu from '../Header/HamburgerMenu'
//import Gallery from '../Gallery'


function HomeScreen() {
  return (
    <>
    {/* <particleBackground/> */}
    <Home/>
    <Header/> <HamburgerMenu/>
    <Fade up><Events/></Fade>
    {/* <Gallery/> */}
   
    <Timeline/>

    <Fade up><AnnouncingSponsors/></Fade>
    <Fade up><PastSponsor/></Fade>   
     
    <Footers/>
    </>
  )
};

export default HomeScreen;