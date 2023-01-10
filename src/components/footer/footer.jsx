import React, { useEffect } from "react";
import "./footer.css";
import SocialFollow from "./social";
import { FaDiscord } from "react-icons/fa";

function Footer() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <footer>
      <div className='row' id='footer' style={{ paddingLeft: "30px" }}>
        <div className='col'>
          <div className='logos_wrap'>
            <div>
              <img
                src={require("../../images/twpng.png")}
                className='logo'
              ></img>
            </div>
            <div></div>
          </div>
          <div>
            TechWeek is the annual flagship event of IEEE NSUT comprising
            various tech events, networking, speaker sessions, workshops, tech
            competitions, mind-boggling group discussions, and the largest
            hackathon in North India, HackNSUT. We’re unifying it into a single
            cross-disciplinary offline experience so that some unique
            knowledgeable insights could be given to students attending it from
            various zones of India with diverse domains and skills.
          </div>
        </div>
        <div className='col brd'>
          <h3 className='footerhead'>
            Address{" "}
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <div>Netaji Subhas University of Technology</div>
          <div>Sector -3, Dwarka</div>
          <div>New Delhi - 110078</div>
          <div className='email'>
            <a href='mailto:ieee@nsut.ac.in'>ieee@nsut.ac.in</a>
          </div>
          <h4>
            Ritik Yadav <br />
            Chief-Convener: +91 97113 57634
          </h4>
          <h4>
            Pranav Chauhan <br />
            Chief-Convener: +91-9315298602
          </h4>
          <br></br>
          {/* <h4>
            Akshat Aggarwal <br />
            Co-Convener: +91 95609 69330
          </h4>
          <h4>
            Ujjawal Bansal <br />
            Co-Convener: +91 91363 34929
          </h4> */}
        </div>
        <div className='col brd'>
          <h3>
            Links{" "}
            <div className='underline'>
              <span></span>
            </div>
          </h3>
          <ul>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#sponsor'>Sponsors</a>
            </li>
            <li>
              <a href='#faq'>FAQs</a>
            </li>
            <li>
              <a href='#footer'>Contact</a>
            </li>
          </ul>
        </div>
        <div className='col'>
          {/* <div
            className="apply-button"
            data-hackathon-slug="hacknsut-5"
            data-button-theme="dark"
            style={{ height: 44 + "px", width: 312 + "px" }}
          ></div> */}
          <a
            href='https://discord.gg/PtmKS5ke'
            target={"_blank"}
            className='discord_wrap'
          >
            <FaDiscord className='discord_icon' />
            <div className='discord_txt'>Join Discord</div>
          </a>
          <div className='social'>
            <SocialFollow />
          </div>
          <div style={{ marginTop: "30px" }}>
            <div className='insu'>Interested in sponsoring us?</div>
            <a href='https://forms.gle/8ap5cah5mgb7rXxf9' target={"_blank"}>
              <button
                className='btn btn1 brochure'
                style={{ marginTop: "20px" }}
              >
                Sponsor Us
              </button>
            </a>
          </div>
        </div>
      </div>
      <hr></hr>

      <a
        href={"https://devfolio.co/code-of-conduct"}
        target={"_blank"}
        style={{ textDecoration: "none", color: "white" }}
      >
        <p className='copyright'>Code of Conduct</p>{" "}
      </a>
      <p className='copyright'>TechWeek © 2023 - All Rights Reserved</p>
    </footer>
  );
}

export default Footer;
