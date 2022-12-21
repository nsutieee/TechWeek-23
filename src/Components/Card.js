import React from "react";
import "./Card.css";

export default function Card() {
  const card = document.querySelector("#card1");
  //   const card2 = document.id("card-2");

  //   card1.addEventListener("click", function (e) {
  // card1.classList.toggle("is-flipped");
  //   });
  // console.log(card);
  let click = () => {
    // console.log(event.currentTarget.id);
    console.log(card);
    card.classList.toggle("is-flipped");
  };
  // const handleClick = event => {
  // };

  return (
    <div className='card'>
      <div className='card__inner' id='card1' onClick={click}>
        <div className='card__face card__face--front card-'>
          <h2>Hi</h2>
        </div>
        <div className='card__face card__face--back'>
          <div className='card__content'>
            <div className='card__header'>
              <img src='pp.jpg' alt='' className='pp' />
              <h2>Hi</h2>
            </div>
            <div className='card__body'>
              <p>lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
