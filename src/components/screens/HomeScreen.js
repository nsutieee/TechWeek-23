import React from "react";
import Events from "../EventCard/events";
//import Sponsors from '../Sponsors/Sponsors'
import { Fade } from "react-reveal";
import Footers from "../FooterS/Footers";
import Home from "../LandingPage/Home";
import Timeline from "../timeline/timeline";
import PastSponsor from "../pastSponsors/pastSponsors";
import AnnouncingSponsors from "../Sponsors/AnnouncingSponsors";
//import HamburgerMenu from '../Header/HamburgerMenu'
import NewHeader from "../../NewHeaderFolder/NewHeader";
//import Gallery from '../Gallery'
import Faq from "../faq/faq";
import Team from "../Team/Team";

function HomeScreen() {
  return (
    <>
      {/* <particleBackground/> */}
      <Home />
      <NewHeader />
      <Fade up>
        <Events />
      </Fade>
      {/* <Gallery/> */}

      <Timeline />

      <Fade up>
        <AnnouncingSponsors />
      </Fade>
      <Fade up>
        <PastSponsor />
      </Fade>
      <Faq />
      <Fade up>
        <Team />
      </Fade>
      <Footers />
    </>
  );
}

export default HomeScreen;
