import React from 'react'
import tcwklgo from '../images/TechWeekLogo.png'

function NavBar() {
  return (
      <>
          <div className="Navigation_Bar">

              <div className="Navigation_Bar_Left">
                <img src={tcwklgo} alt="" />
              </div>

              <div className="Navigation_Bar_Right">
                  <div className="NavBar_Box">
                      <p>HOME</p>
                  </div>
                  <div className="NavBar_Box">
                      <p>ABOUT</p>
                  </div>
                  <div className="NavBar_Box">
                      <p>EVENTS</p>
                  </div>
                  <div className="NavBar_Box">
                      <p>GALLERY</p>
                  </div>
                  <div className="NavBar_Box">
                      <p>FAQs</p>
                  </div>
              </div>
          </div>
      </>
  )
}

export default NavBar
