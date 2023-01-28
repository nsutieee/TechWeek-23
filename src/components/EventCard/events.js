import React from "react";
import EventCard from "./eventCard";
import "../../styles/events.css";
import { Fade } from "react-reveal";
import TubelightText from "../TubeLightText/TubelightText";

export default function Events() {
  return (
    <section className='eventStart' id="events">
      <p class='event-heading'>OUR EVENTS</p>
      <div className='events'>
        <EventCard
        img="hack"
        href="https://hacknsut23.devfolio.co/"
        id='card0'
        frontHeader='Event 1'
        title='HackNSUT'
        details='It will be a 30-hour in-person hackathon wherein various students and professionals from more than 350 top universities across the nation will be participating. '
      />
        <EventCard
        img="cof"
        href="http://bit.ly/3D36BDg"
        id='card1'
        frontHeader='Event 1'
        title='Code-O-Fiésta'
        details='Ready to solve fun, challenging problems? Coding Ninjas is hosting the ”Code-O-Fiésta” in collaboration with ”IEEE NSUT”'
      />
      <EventCard
              img="cos"
              href="https://forms.gle/ApCiPYarWeMZE3wR6"
        id='card2'
        frontHeader='Event 2'
        title='Chamber of Secrets'
        details='TechWeek 2023 is elated to announce Chamber of Secrets, a treasure hunt event, filled with mind-thobbering puzzles and riddles where you will get to showcase your problem solving and detective skills live!'
      />
      <EventCard
              img="dat"
              href="https://bit.ly/TechWeek2023_Designathon"
        id='card3'
        frontHeader='Event 3'
        title='Design-A-Thon'
        details='TechWeek 2023 is thrilled to announce the Design-A-Thon, a unique opportunity for aspiring and novice designers to showcase their talents and push their creative boundaries.'
      />
      <EventCard
              img="hnc"
              href="https://bit.ly/HIDE_N_CLICK"
        id='card4'
        frontHeader='Event 4'
        title="HIDE 'N' CLICK"
        details="Junoon - The Photography club of NSUT announces 'Hide n Click' an event in association with IEEE NSUT for the TechWeek 2023."
      />
      <EventCard
              img="poly"
              href="https://lu.ma/metaschool_techweek2023"
        id='card5'
        frontHeader='Event 5'
        title='How to create a token in Polygon'
        details='IEEE NSUT in collaboration with METASCHOOL present to you "Learn with Ashwin”, a knowledge enriched experience brought to you by TechWeek 2023.'
      />
      <EventCard
              img="qm"
              href="https://bit.ly/TechWeek2023_Quizomania"
        id='card6'
        frontHeader='Event 6'
        title='Quizomania'
        details='Quizomania, an exhilarating Tech Quiz by The NSUT Quiz Club in collaboration with IEEE NSUT as a part of TechWeek 2023.'
      />
      <EventCard
              img="robowars"
              href="https://bit.ly/ROBOWARS"
        id='card11'
        frontHeader='Event 6'
        title='ROBOWAR'
        details='IEEE NSUT in collaboration with ARES is excited to introduce you to Techweek 2023 ROBOWAR, the ultimate robo-battling event.'
      />
      <EventCard
              img="str"
              href="https://bit.ly/Stratazenith_TechWeek2023"
        id='card12'
        frontHeader='Event 6'
        title='Stratazenith'
        details='IEEE NSUT in association with The Indian Game Theory Society at NSUT proudly unveil Stratazenith - an exhilarating strategy case competition, set to ignite TechWeek 2023.'
      />
      <EventCard
              img="tff"
              href="https://bit.ly/TheFrontendFiesta"
        id='card13'
        frontHeader='Event 6'
        title='The Frontend Fiésta'
        details='A front-end development competition to showcase the best in modern web design and development , that will recognize the most talented and innovative developers, who bring front-end innovation to life.'
      />
      <EventCard
              img="wot"
              href="https://bit.ly/Write-O-Tech"
        id='card14'
        frontHeader='Event 6'
        title='Write-O-Tech'
        details="A technical blog writing competition to be conducted by IEEE NSUT in association with The Alliance, NSUT's Newspaper"
      />
      </div>
    </section>
  );
}
