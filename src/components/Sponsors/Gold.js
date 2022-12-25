import Polygon from "./testimage1.png";
import Celo from "./testimage2.png";
const object1={src:Polygon,href:"https://polygon.technology"};
const object2={src:Celo,href:"https://celo.org/"};
const object3={src:Polygon,href:"https://polygon.technology"};
const object4={src:Celo,href:"https://celo.org/"};
const object5={src:Polygon,href:"https://polygon.technology"};
const object6={src:Celo,href:"https://celo.org/"};
const goldarray=[object1,object2,object3,object4,object5,object6];
    const listitems=goldarray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo" />
            </a>
        </div>
    )
function Gold() {
    return (
        <div class="gold">
                    <div class="gold-grid">
                        {listitems};
                    </div>
                    <p class="gold-heading">
                        GOLD SPONSORS
                    </p>
                </div>
    );
  }
  
  export default Gold;
