// import styles of this component
import styles from "./Header.module.css"

// import other components
import ContainerCard from '../ContainerCard/ContainerCard';
import Nav from "../Nav/Nav"
import {FaDiscord} from 'react-icons/fa'
import BrickLayout from "../BrickLayout/BrickLayout";
import HeaderBoxes from "./HeaderBoxes/HeaderBoxes";

// import something from react packages
import Countdown from "./Countdown";
import { SearchNormal1 } from "iconsax-react";
import { Setting4 } from "iconsax-react";

// import jsons
import JsonHeader from '../../Jsons/HeaderBoxes.json';

// Header component
const Header = () => {
  return (
    <header className={`${styles.header} flex justify-content-center`}>
        <ContainerCard className="flex flex-column">
          <div className={styles["blur-circle-shape"]}></div>

          <Nav />
          <BrickLayout />
          
          <div className={`${styles["headings-header"]} flex justify-content-center flex-column `}>
            <h2 className={styles["heading-header-title"]}>UNLEASH THE LIMITS >>>>>></h2>
            <h1 className={styles["heading-header-second-title"]}>
              Welcome to the official website <br />
              Of <span>TechWeek</span> 2023
            </h1>
            
            <div className={`${styles["search-bar"]} flex align-items-center`}>
              <SearchNormal1 size="30" color="var(--white-100)"/>
              <input type="text" className={styles["search-input"]} placeholder="5 days | 13+ events | Innovation | Develop | Code" />
              <button className={`${styles["search-btn"]} flex justify-content-center align-items-center`}>
                <Setting4 size="20" color="var(--dark-900)"/>
              </button>
            </div>

            <Countdown date={"2023-02-08"} />
            <a href="https://discord.gg/PtmKS5ke" target={"_blank"} className="discord_wrap" style={{marginTop:"10px",width:"220px"}}>
           <FaDiscord className="discord_icon"/>
           <div className="discord_txt">Join Discord</div>
         </a>

          </div>
        </ContainerCard>
    </header>
  )
}

export default Header