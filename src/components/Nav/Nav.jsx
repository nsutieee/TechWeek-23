// import styles of this component
import styles from "./Nav.module.css";

// import other components
import Button from "../Elements/Button/Button";

// import other react pkg to use
import { HambergerMenu } from "iconsax-react";
import logo from "../../images/twpng.png";

// Nav component
const Nav = () => {
  return (
    <nav className={`${styles.nav} flex align-items-center flex-wrap`}>
      <img src={logo} style={{ height: "50px" }} />
      <ul className={`flex align-items-center ${styles["navbar-nav"]}`}>
        <li className={`${styles["nav-item"]} ${styles.active}`}>
          <a href='#about' className={styles["nav-link"]}>
            About
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href='#sponsor' className={styles["nav-link"]}>
            Sponsors
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href='#timeline' className={styles["nav-link"]}>
            Timeline
          </a>
        </li>
        <li className={styles["nav-item"]}>
          <a href='#events' className={styles["nav-link"]}>
            Events
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href='#gallery' className={styles["nav-link"]}>
            Gallery
          </a>
        </li>
        <li className={`${styles["nav-item"]} ${styles["d-none-1100"]}`}>
          <a href='#faq' className={styles["nav-link"]}>
            FAQ
          </a>
        </li>
      </ul>
      <div className={`flex ${styles["navbar-buttons"]}`}>
        <Button theme='transparent'>
          <a
            href='https://forms.gle/EZRw7Bz8Nw4b3dY49'
            target={"_blank"}
            style={{ color: "white" }}
          >
            Deliver a session
          </a>
        </Button>
        <Button theme='transparent'>
          <a
            href='https://forms.gle/2p6W1qJLsfPWopTy8'
            target={"_blank"}
            style={{ color: "white" }}
          >
            Become outreach partner
          </a>
        </Button>
        <Button theme='matrix'>
          <a
            href='https://forms.gle/8ap5cah5mgb7rXxf9'
            target={"_blank"}
            style={{ color: "black" }}
          >
            Sponsor us
          </a>
        </Button>
      </div>
    </nav>
  );
};

export default Nav;
