import React from 'react'
import FlipperCountdown from '../FlipperCountdown'
import './Home.css'
import HeaderGraphic from './HeaderGraphic'

function Home() {
  return (
    <section>
      <div className='Header_Ssn'>
        <div className='Master_Container'>
          <div className='Main_Header'>
            <h1>Tech Week '23</h1>
            <h2>By IEEE NSUT</h2>
          </div>
          <div className="Main_CountDown"> <FlipperCountdown /></div>
        </div>
        <div className='Graphic_Container'>
          <div className='Header_Graphic'><HeaderGraphic /></div>
          <div className='About_TchWk'>
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home