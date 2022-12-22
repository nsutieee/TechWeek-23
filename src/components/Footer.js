import React from 'react'
import "./Footer.css";
import logo from "./techweek.png";
function Home() {
  return (
    <div classNameName="App">
     
      <div className="footer-sec">
        <div className="main">
          <div className="logo row">
            <div className="footer-header">
              <img class="logo" src={logo} />
            </div>
            <div className="logo-des">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour.
              </p>

              <a href="#" className="btn-know">
                Know More
              </a>
            </div>
          </div>

          <div className="office row">
            <div className="footer-header">
              <h3>Contacts</h3>
            </div>
            <div className="office-des">
              <section>
                <span>
                  <i class="fa fa-calendar"></i>
                </span>
                <span>1th-5th Feburary 2022</span>
              </section>
              <section>
                <span>
                  <i class="fa fa-map-marker"></i>
                </span>
                <span>NSUT, Dwarka, Delhi</span>
              </section>
              <section>
                <span>
                  <i class="fa fa-phone"></i>
                </span>
                <span>
                  <a href="#" class="contacts">
                    (00) 0000 0000
                  </a>
                </span>
              </section>
              <section>
                <span>
                  <i class="fa fa-envelope"></i>
                </span>
                <span>
                  <a href="#" class="contacts">
                    ieee@nsut.ac.in
                  </a>
                </span>
              </section>
            </div>
          </div>

          <div className="link row">
            <div className="footer-header">
              <h3>Resources</h3>
            </div>

            <div className="link-des">
              <a href="#" className="footer-links">
                Sponsorship Brochure
              </a>
              <a href="#" className="footer-links">
                Code Of Conduct
              </a>
            </div>
          </div>

          <div className="newsletter row">
            <div className="footer-header">
              <h3>Community Social Connection</h3>
            </div>
            <div className="newsletter-des">
             
              <div className="icons">
                <a href="#">
                  <i className="social-icon ri-facebook-fill"></i>
                </a>
                <a href="#">
                  <i className="social-icon ri-instagram-line"></i>
                </a>
                <a href="#">
                  <i className="social-icon ri-linkedin-fill"></i>
                </a>
                <a href="#">
                  <i className="social-icon ri-github-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
       
        <div className="bottom">
          <span class="border-shape"></span>
          <div class="bottom_content">
            <section>
              <a href="#">Home</a>
              <a href="#">About us</a>
              <a href="#">Our Team</a>
              <a href="#">Sponsers</a>

              <a href="#">Contact Us</a>
            </section>
          </div>
          <div class="copyright">
            Copyright © 2021 websitename - All rights reserved
          </div>
        </div>
      </div>
    </div>

 
  )
}

export default Home