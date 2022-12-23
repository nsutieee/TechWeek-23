import "./Footers.css"

import im from "../../images/TechWeekLogo.png"

const Footers = () => {
    return (
        <footer>
            <div className="row" id="footer">
        <div className="col">
          <div className="logos_wrap">
            <div>
          <img
            src={im}
            className="logo_nsut"
            ></img>
            </div>
            </div>
          <div className='Column_1_Des'>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. 
          </div>
        </div>
        <div className="col brd">
          <h3 className="footer-header">
            Address
         </h3>
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

        <div className="col brd">
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
        </div>
        
        <div className="col brd">
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
       
      </div>
      <hr></hr>

    <a href={""} target={"_blank"} style={{textDecoration:"none",color:"white"}}>
     <p className="copyright">Code of Conduct</p>  </a> 
      <p className="copyright">Techweek © 2023 - All Rights Reserved</p>
        </footer>
    )
}

export default Footers;