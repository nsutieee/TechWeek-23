import React from "react";
import "./Card.css";

export default function Card(props) {
  //   const card1 = document.id("card-1");
  //   const card2 = document.id("card-2");

  //   card1.addEventListener("click", function (e) {
  // card1.classList.toggle("is-flipped");
  //   });

  let click = (e) => {
    console.log(e);
    // card1.classList.toggle("is-flipped");
  };

  return (
    <div className='card'>
      <div className='card__inner'>
        <div className={"card__face card__face--front card-" + props.id}>
          <h2>{props.frontHeader}</h2>
        </div>
        <div className={"card__face card__face--back" + props.id}>
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
