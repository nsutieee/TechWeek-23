import React from "react";
import EventCard from "./eventCard";
import "../../styles/events.css";

export default function Events() {
  return (
    <section className="events">
    <div className='events'>
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
        frontHeader='Event 1'
        title='Title 1'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur?'
      />
      <EventCard
        id='card5'
        frontHeader='Event 2'
        title='Title 2'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur? Dolor amet similique, ad culpa magnam alias eveniet odit labore quas deserunt consequun'
      />
      <EventCard
        id='card6'
        frontHeader='Event 3'
        title='Title 3'
        details='Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, harum tenetur? Dolor amet similique,'
      />
    </div>
    </section>
  );
}
