import left from "../../images/Left.png"
import right from "../../images/Right.png"
import mid from "../../images/Mid.png"
import "./split.css"
import { Fade } from "react-reveal"


const TechWeekLogoSplit = () => {
    return(
    <>
      <div className="logoSplit">
        <Fade left>   <img src={left} /> </Fade>
        <Fade down>  <img className='Main_Header_MidSsn'  src={mid} />  </Fade>
        <Fade right> <img src={right} /></Fade>
      </div>
      {/* <div className="logoSplitSmall">
        <img src={mid}  />
        <img src={left}  />
        <img src={right}  />
      </div>  */}
    </>
  )
}

export default TechWeekLogoSplit;