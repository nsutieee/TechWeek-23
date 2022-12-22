import NavBar from "../NavBar";

import "./Header.css";

const Header = () => {
    return(
        <header>
        <div>
         <NavBar/>
        </div>
        <div className="headerItem">
          <div className="headerItem1">
                ITEM !
          </div>
          <div className="headerItem2">
                Item 2
          </div>
        </div>
        </header>
    )
}

export default Header;