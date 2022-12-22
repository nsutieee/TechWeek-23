import Polygon from "./testimage1.png";
import Celo from "./testimage2.png";
const object1={src:Polygon,href:"https://polygon.technology"};
const object2={src:Celo,href:"https://celo.org/"};
const object3={src:Celo,href:"https://celo.org/"};
const object4={src:Polygon,href:"https://polygon.technology"};
const platarray=[object1,object2,object3,object4];
const listitems=platarray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo"/>
            </a>
        </div>
    )
function Plat() {
    return (
        <div class="plat">
                    <p class="plat-heading">
                        PLATINUM SPONSORS
                    </p>
                    <div class="plat-grid">
                        {listitems};
                    </div>
                </div>
    );
  }
  
  export default Plat;