import React from "react";
import "./pastSponsors.css";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";

import line1 from '../../images/Sponsor_Row_1.png'
import line2 from '../../images/Sponsor_Row_2.png'
import line3 from '../../images/Sponsor_Row_3.png'
import line4 from '../../images/Sponsor_Row_4.png'





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
            style={{ width: (50 < onlyWidth / 2 - 200) ? onlyWidth / 2 - 200 : 50 }}
          ></div>
          <div
            className="header_line"
            style={{ width: (50 < onlyWidth / 2 - 200) ? onlyWidth / 2 - 200 : 50 }}
          ></div>
        </div>
        <div class="slider">
          <div class="slide-track">
            <div class="slide">
              <img src={line1} height="100" alt="" />
            </div>

            <div class="slide">
              <img src={line2} height="100" alt="" />
            </div>

            <div class="slide">
              <img src={line3} height="100" alt="" />
            </div>

            <div class="slide">
              <img src={line4} height="100" alt="" />
            </div>
            
          </div>
        </div>
      </div>

    </section>
  );
}

export default PastSponsor;