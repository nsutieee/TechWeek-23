import React from "react";
import "../../styles/Card.css";
import cof from "./images/cof.png"
import cos from "./images/cos.png"
import dat from "./images/dat.png"
import hnc from "./images/hnc.png"
import poly from "./images/poly.jpeg"
import qm from "./images/qm.png"
import robowars from "./images/robowars.png"
import str from "./images/str.png"
import tff from "./images/tff.jpeg"
import wot from "./images/wot.jpeg"
import hack from "./images/hack.png"

export default function EventCard(props) {
  // let mouseOver = () => {
  //   const card = document.querySelector("#" + props.id);
  //   card.classList.add("is-flipped");
  // };
  // let mouseOut = () => {
  //   const card = document.querySelector("#" + props.id);
  //   card.classList.remove("is-flipped");
  // };

  let click = () => {
    const card = document.querySelector("#" + props.id);
    card.classList.toggle("is-flipped");
  };
  let eimg;
  if(props.img==="cof"){
    eimg=cof
  }
  if(props.img==="cos"){
    eimg=cos
  }
  if(props.img==="dat"){
    eimg=dat
  }
  if(props.img==="hnc"){
    eimg=hnc
  }
  if(props.img==="poly"){
    eimg=poly
  }
  if(props.img==="qm"){
    eimg=qm
  }
  if(props.img==="robowars"){
    eimg=robowars
  }
  if(props.img==="str"){
    eimg=str
  }
  if(props.img==="tff"){
    eimg=tff
  }
  if(props.img==="wot"){
    eimg=wot
  }
  if(props.img==="hack"){
    eimg=hack
  }
  return (
    <div className='card' onClick={click}>
      <div className='card__inner' id={props.id}>
        <div className='card__face card__face--front card-'>
          <img src={eimg} className="event_post"/>
        </div>
        <div className='card__face card__face--back'>
          <div className='card__content'>
            <div className='card__header'>
              <h2>{props.title}</h2>
            </div>
            <div className='card__body'>
              <p>{props.details}</p>
            </div>
            <div className='card__href'>
              <a href={props.href} className="link_event" target={"_blank"}>Register</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
