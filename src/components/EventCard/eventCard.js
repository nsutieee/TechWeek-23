import React from "react";
import "./Card.css";

export default function EventCard(props) {
  let click = () => {
    const card = document.querySelector("#" + props.id);
    console.log(card);
    card.classList.toggle("is-flipped");
  };

  return (
    <div className='card'>
      <div className='card__inner' id={props.id} onClick={click}>
        <div className='card__face card__face--front card-'>
          <h2>{props.frontHeader}</h2>
        </div>
        <div className='card__face card__face--back'>
          <div className='card__content'>
            <div className='card__header'>
              <img src='pp.jpg' alt='' className='pp' />
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
