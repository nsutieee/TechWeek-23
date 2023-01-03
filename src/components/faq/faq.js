import React from "react";
import { Fade } from "react-reveal";
import Accordian from "./Accordian";
import "./faq.css";
export default function faq() {
  return (
    <section className='faq' id="faq">
      <Fade up>
        <div className='header'>FAQs</div>
      </Fade>
      <Fade left>
        <Accordian
          ques='Is this an offline event?'
          ans='Yes it is an offline event with the roots binded in Netaji Subhas University Of Technology, Delhi'
        />
      </Fade>
      <Fade right>
        <Accordian
          ques='What is the duration of the TechWeek 2023?'
          ans="TechWeek would span from 8th February 2023 to 13th February 2023"
        />
      </Fade>
      <Fade left>
        <Accordian
          ques='How many events would be there in TechWeek 2023'
          ans="TechWeek 2023 would comprise more than 13 events on diversified domains including the North India's second largest hackathon, HackNSUT 2023"
        />
      </Fade>
      <Fade right>
        <Accordian
          ques='What are the benefits for participants'
          ans='Participants would be flooded with too many swags and goodies along with that TechWeek would offer amazing networking opportunity and innovative environment'
        />
      </Fade>
    </section>
  );
}
