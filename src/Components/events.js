import React from "react";
import EventCard from "./eventCard";
import "./events.css";

export default function Events() {
  return (
    <div className='events'>
      <EventCard
        id='card1'
        frontHeader='Event'
        title='Title'
        details='Hello world'
      />

      <EventCard
        id='card2'
        frontHeader='Event 2'
        title='Title 2'
        details='Hello world'
      />
      <EventCard
        id='card3'
        frontHeader='Event 3'
        title='Title 3'
        details='Hello world'
      />
    </div>
  );
}
