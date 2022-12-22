import Plat from "./Plat";
import Gold from "./Gold";
import Silver from "./Silver";
import './Sponsors.css';

function Sponsors() {
    return (
        <section class="sponsors">

        <p class="sponsor-heading">
            OUR SPONSORS
        </p>
        <div class="column">
            <Plat/>
            <Gold/>
            <Silver/>
        </div>
        </section>
    );
  }
  
  export default Sponsors;