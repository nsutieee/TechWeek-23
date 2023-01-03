import React, { useState } from "react";
import Events from "../EventCard/events";
//import Sponsors from '../Sponsors/Sponsors'
import { Fade } from "react-reveal";

import styles from "../../App.module.css";
import Home from "../LandingPage/Home";
import Timeline from "../timeline/timeline";
import PastSponsor from "../pastSponsors/pastSponsors";
import MasonryLayout from "../../components/MasonryLayout/MasonryLayout";
import ContainerCard from "../../components/ContainerCard/ContainerCard";
import Dropdown from "../../components/Elements/Dropdown/Dropdown";
import AnnouncingSponsors from "../Sponsors/AnnouncingSponsors";
//import HamburgerMenu from '../Header/HamburgerMenu'
import NewHeader from "../../NewHeaderFolder/NewHeader";
//import Gallery from '../Gallery'
import Faq from "../faq/faq";
import Team from "../Team/Team";
import About from "../about/About";
import AboutIeee from "../about/aboutIeee";
import Gall from "../../Gall";
import images from "../../Jsons/Images.json";
import Footer from "../footer/footer";

const ddItems = [
  {
    id: 1,
    title: "All Images",
    active: true,
  },
  {
    id: 2,
    title: "Diversity",
    active: false,
  },
  {
    id: 3,
    title: "Networking",
    active: false,
  },
  {
    id: 4,
    title: "Innovation",
    active: false,
  },
  {
    id: 5,
    title: "Passion",
    active: false,
  },
];

function HomeScreen() {
  const [categoryImage, setCategoryImage] = useState(images.categories.all);
  const takeDdTitle = (ddTitle) => {
    setCategoryImage(() => {
      let categoryChoose = Object.keys(images.categories).filter((item) => {
        const titleSplited = ddTitle.toLowerCase().split(" ")[0];
        return item.toLowerCase().includes(titleSplited);
      });
      return [...images.categories[categoryChoose]];
    });
  };
  return (
    <>
      {/* <particleBackground/> */}
      <Gall />
      <About />
      <AboutIeee />
      <Fade up>
        <Events />
      </Fade>

      <Timeline />

      <Fade up>
        <AnnouncingSponsors />
      </Fade>
      <Fade up>
        <PastSponsor />
      </Fade>
      <Fade up>
        <Team />
      </Fade>
      <div
        className="flex justify-content-center"
        style={{ marginTop: "160px", padding: "50px" }}
        id="gallery"
      >
        <ContainerCard>
          <div
            className={`${styles["gallery-setting"]} flex justify-content-between align-items-center`}
          >
            <h1>Galleria</h1>
            <Dropdown
              title="All Images"
              items={ddItems}
              liftingDdTextUp={takeDdTitle}
            />
          </div>
          <MasonryLayout images={categoryImage} />
        </ContainerCard>
      </div>

      <Faq />

      <Footer />
    </>
  );
}

export default HomeScreen;
