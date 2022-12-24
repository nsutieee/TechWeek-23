import React from 'react'
import "./timeline.css"
import {
    useWindowSize,
    useWindowWidth,
    useWindowHeight,
  } from "@react-hook/window-size";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';



function Timeline() {
    const onlyWidth = useWindowWidth();
  return (
      <div>
 <div className="theme__header" id="timeline" style={{marginTop:"100px"}}>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
        <div className="theme__head">Schedule</div>
        <div
          className="header_line"
          style={{ width: (50<onlyWidth / 2 - 200)?onlyWidth / 2 - 200:50 }}
        ></div>
      </div>
      <p class="sponsor-heading">
            TIMELINE
        </p>
    <VerticalTimeline>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2f363e', color: '#0ae0e5' }}
        contentArrowStyle={{ borderRight: '7px solid  #0ae0e5' }}
        date="10 March 2022"
        iconStyle={{ background: '#0ae0e5', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#2f363e' }}
        contentArrowStyle={{ borderRight: '7px solid  #0aacfc' }}
        date="22 March 2022"
        iconStyle={{ background: 'white', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Ends</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2f363e', color: '#0ae0e5' }}
        contentArrowStyle={{ borderRight: '7px solid  #0ae0e5' }}
        date="10 March 2022"
        iconStyle={{ background: '#0ae0e5', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#2f363e' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="25 March 2022, 9 AM"
        iconStyle={{ background: 'white', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">CheckIn</h3>
      
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2f363e', color: '#0ae0e5' }}
        contentArrowStyle={{ borderRight: '7px solid  #0ae0e5' }}
        date="10 March 2022"
        iconStyle={{ background: '#0ae0e5', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#2f363e' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="25 March 2022, 12 Noon"
        iconStyle={{ background: 'white', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Coding Period Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#2f363e', color: '#0ae0e5' }}
        contentArrowStyle={{ borderRight: '7px solid  #0ae0e5' }}
        date="10 March 2022"
        iconStyle={{ background: '#0ae0e5', color: '#fff' }}
        >
        <h3 className="vertical-timeline-element-title">Registration Starts</h3>
      
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'white', color: '#2f363e' }}
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date="26 March 2022, 3 Noon"
        iconStyle={{ background: 'white', color: '#fff' }}
      >
        <h3 className="vertical-timeline-element-title">Closing Ceremony</h3>
      
      </VerticalTimelineElement>

    </VerticalTimeline>
    </div>
  )
}

export default Timeline