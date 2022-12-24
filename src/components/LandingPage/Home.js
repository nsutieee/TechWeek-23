import React from 'react'
import FlipperCountdown from '../FlipperCountdown'
import './Home.css'
import HeaderGraphic from './HeaderGraphic'
import { Fade } from "react-reveal"
import TechWeekLogoSplit from './techweekLogo'




function Home() {
  return (
    <section>
      <div className='Header_Ssn'>
        <div className='Master_Container'>
          <div className='Main_Header'>
            <TechWeekLogoSplit/>
          </div>
          <div className="Main_CountDown"> <FlipperCountdown /></div>
        </div>
        <div className='Graphic_Container'>
        <Fade left>  <div className='Header_Graphic'><HeaderGraphic /></div></Fade>
          <Fade right><div className='About_TchWk left' >
            <h3>About Tech Week</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cum minus voluptates expedita debitis voluptas! Quam accusamus,
              aliquam itaque maiores quo nobis voluptatibus eius nihil quia
              dolores dolor ipsam dignissimos corrupti,
              obcaecati temporibus vero, accusantium quaerat.
              Minus eum maxime earum quos quibusdam beatae velit ea ducimus,
              mollitia quia illo esse cupiditate?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Cum minus voluptates expedita debitis voluptas! Quam accusamus,
             </p>
          </div></Fade>
        </div>

        
      </div>
    </section>
  )
}

export default Home