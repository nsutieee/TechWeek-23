import React from "react";
import EventCard from "./eventCard";
import "../../styles/events.css";

export default function Events() {
  return (
    <section className="eventStart">
       <p class="event-heading">
            OUR EVENTS
        </p>
        <div className="events">
      {/* <div className='events'> */}
      <EventCard
        id='card1'
        frontHeader='Event 1'
        title='Title 1'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur?'
      />
      <EventCard
        id='card2'
        frontHeader='Event 2'
        title='Title 2'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur? Dolor amet similique, ad culpa magnam alias eveniet odit labore quas deserunt consequun'
      />
      <EventCard
        id='card3'
        frontHeader='Event 3'
        title='Title 3'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur? Dolor amet similique,'
      />
      <EventCard
        id='card4'
        frontHeader='Event 4'
        title='Title 4'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur?'
      />
      <EventCard
        id='card5'
        frontHeader='Event 5'
        title='Title 5'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur? Dolor amet similique, ad culpa magnam alias eveniet odit labore quas deserunt consequun'
      />
      <EventCard
        id='card6'
        frontHeader='Event 6'
        title='Title 6'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur? Dolor amet similique,'
      />
      {/* </div> */}
      </div>
    </section>
  );
}
