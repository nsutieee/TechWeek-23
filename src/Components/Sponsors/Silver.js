import Polygon from "./testimage1.png";
import Celo from "./testimage2.png";
const object1={src:Polygon,href:"https://polygon.technology"};
const object2={src:Celo,href:"https://celo.org/"};
const object3={src:Polygon,href:"https://polygon.technology"};
const object4={src:Celo,href:"https://celo.org/"};
const object5={src:Celo,href:"https://celo.org/"};
const object6={src:Polygon,href:"https://polygon.technology"};
const object7={src:Celo,href:"https://celo.org/"};
const object8={src:Polygon,href:"https://polygon.technology"};
const object9={src:Polygon,href:"https://polygon.technology"};
const object10={src:Celo,href:"https://celo.org/"};
const object11={src:Polygon,href:"https://polygon.technology"};
const object12={src:Celo,href:"https://celo.org/"};
const object13={src:Celo,href:"https://celo.org/"};
const object14={src:Polygon,href:"https://polygon.technology"};
const object15={src:Celo,href:"https://celo.org/"};
const object16={src:Polygon,href:"https://polygon.technology"};
const silverarray=[object1,object2,object3,object4,object5,object6,object7,object8,object9,object10,object11,object12,object13,object14,object15,object16];
    const listitems=silverarray.map((index)=>
        <div class="logo-box griditem">
            <a href={index.href} target="_blank" rel="noreferrer">
                <img src={index.src} alt="logo" />
            </a>
        </div>
    )
function Silver() {
    return (
        <div class="silver">
                    <p class="silver-heading">
                        SILVER SPONSORS
                    </p>
                    <div class="silver-grid">
                        {listitems};
                    </div>
                </div>
    );
  }
  
  export default Silver;