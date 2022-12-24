import React from "react";
import "./pastSponsors.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";


import img1 from "../../images/Mid.png";
import img2 from "../../images/Mid.png";
import img3 from "../../images/Mid.png";
import img4 from "../../images/Mid.png";
import img5 from "../../images/Mid.png";
import img6 from "../../images/Mid.png";
import img7 from "../../images/Mid.png";
import img8 from "../../images/Mid.png";
import img9 from "../../images/Mid.png";
import img10 from "../../images/Mid.png";
import img11 from "../../images/Mid.png";




function PastSponsor() {
  const onlyWidth = useWindowWidth();
  return (
<section className="pastSponsors">
<p class="sponsor-heading">
            PAST SPONSORS
        </p>
      <div className="sponsor" id="sponsor">
      <div className="theme__header" style={{ paddingTop: "80px" }}>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Past Sponsors</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
      <div class="slider">
        <div class="slide-track">
          <div class="slide">
            <img src={img1} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img2} height="100" alt="" />
          </div>

          <div class="slide"></div>

          <div class="slide">
            <img src={img3} height="100" alt="" />
          </div>

          <div class="slide">
            <img src={img4} height="100" alt="" />
          </div>
          <div class="slide"></div>
          <div className="slide" style={{marginLeft:'80px'}}>
            <img src={img5} height="100" alt=""/>
          </div>

        
		  <div class="slide">
            <img src={img6} height="100" alt="" />
          </div>
		  <div class="slide"></div>
		  <div class="slide">
            <img src={img7} height="100" alt="" />
          </div>
		  <div class="slide">
            <img src={img8} height="100" alt="" />
          </div>
		  <div class="slide">
            <img src={img9} height="100" alt="" />
          </div>
		  <div class="slide" style={{marginLeft:"80px"}}>
            <img src={img10} height="100" alt="" />
          </div>
		  <div class="slide" style={{marginLeft:"80px"}}>
            <img src={img11} height="100" alt="" />
          </div>
		  
        </div>
      </div>
    </div>

</section>
  );
}

export default PastSponsor;