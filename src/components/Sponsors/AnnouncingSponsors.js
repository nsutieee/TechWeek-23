import React from "react";
import "../../App.css";
import logo1 from "./images/axure.png"
import logo2 from "./images/taskade.png"
import logo3 from "./images/wolfram.png"
import logo4 from "./images/xyz.png"

import p1 from "./partners/dscbennett.png"
import p2 from "./partners/ed.png"
import p3 from "./partners/ieeedtu.png"
import p4 from "./partners/ieeepec.png"
import p5 from "./partners/kalidni.png"

function AnnouncingSponsors() {
  return (
    <section className="eventStart" id="sponsor">
      <p class="event-heading">SPONSORS</p>
      <div className="logos_wrap">
        <img src={logo1} className="logo_sponsi"/>
        <img src={logo2} className="logo_sponsi"/>
        <img src={logo3} className="logo_sponsi"/>
        <img src={logo4} className="logo_sponsi"/>
      </div>
      <p class="event-heading" style={{marginTop:"60px"}}>Outreach Partners</p>
      <div className="logos_wrap">
        <img src={p1} className="logo_sponsi"/>
        <img src={p2} className="logo_sponsi"/>
        <img src={p3} className="logo_sponsi"/>
        <img src={p4} className="logo_sponsi"/>
        <img src={p5} className="logo_sponsi"/>
      </div>

    </section>
  );
}

export default AnnouncingSponsors;
