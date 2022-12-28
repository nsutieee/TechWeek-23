import React from "react";
import "./Team.css";
import logo1 from "./img/work1.jpg";
import logo2 from "./img/work2.jpg";
import logo3 from "./img/work3.jpg";
import logo4 from "./img/work4.jpg";
import logo5 from "./img/work5.jpg";
import logo6 from "./img/work6.jpg";
import logo7 from "./img/work7.jpg";
import Honecombcell from "./Honecombcell";

export default function Team() {
  return (
    <div className='team'>
      <p className='heading'>OUR TEAM</p>
      <ul className='honeycomb'>
        <Honecombcell img={logo1} title='Web Design' />
        <Honecombcell img={logo2} title='Graphic Design' />
        <Honecombcell img={logo3} title='Illustration' />
        <Honecombcell img={logo4} title='Motion Graphics' />
        <Honecombcell img={logo5} title='3D Animation' />
        <Honecombcell img={logo6} title='Cinematic 4D' />
        <Honecombcell img={logo7} title='Share Design' />
        <Honecombcell img={logo7} title='Share Design' />
        <Honecombcell img={logo7} title='Share Design' />
        <Honecombcell img={logo7} title='Share Design' />
        <Honecombcell img={logo7} title='Share Design' />
        <li className='honeycomb-cell honeycomb_Hidden'></li>
      </ul>
    </div>
  );
}
