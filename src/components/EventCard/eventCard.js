import React from "react";
import "../../styles/Card.css";

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

  return (
    <div className='card' onClick={click}>
      <div className='card__inner' id={props.id}>
        <div className='card__face card__face--front card-'>
          <h2>{props.frontHeader}</h2>
        </div>
        <div className='card__face card__face--back'>
          <div className='card__content'>
            <div className='card__header'>
              <h2>{props.title}</h2>
            </div>
            <div className='card__body'>
              <p>{props.details}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
