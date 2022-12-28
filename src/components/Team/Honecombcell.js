import React from "react";
import "./Team.css";

export default function Honecombcell(props) {
  return (
    <li class='honeycomb-cell'>
      <img class='honeycomb-cell_img' src={props.img} alt='' />
      <div class='honeycomb-cell_title'>{props.title}</div>
      <a href=''>
        <i class='fa fa-lg fa-linkedin'></i>
      </a>
      <a href=''>
        <i class='fa fa-lg fa-instagram'></i>
      </a>
    </li>
  );
}
