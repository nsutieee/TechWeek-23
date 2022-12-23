import React from 'react'
import FlipperCountdown from '../FlipperCountdown'
import './Home.css'

function Home() {
  return (
    <section>
          <div className='Master_Container'>
              <div className='Main_Header'>
                  <h1>Tech Week '23</h1>
                  <h2>-By IEEE NSUT</h2>
              </div>
          </div>
          <FlipperCountdown/>
    </section>
  )
}

export default Home