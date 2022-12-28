import React from 'react'
import styled from 'styled-components'
import HamBurgerMenu from './HamBurgerMenu'
import RightNavBar from './RightNavBar'
import './NewHeader.css'
import logo1 from '../images/TechWeekLogo.png'

const MainLogo = styled.div`
  
  img{
    height: 70px;
    width: 70px;
  }

  @media(max-width: 1230px){
    img{
      height: 50px; width: 50px;
    }
  }
  @media(max-width: 915px){
    img{
      height: 40px; width: 40px;
    }
  }
  @media(max-width: 768px){
    img{
      height: 65px; width: 65px;
    }
  }
`


const Nav = styled.nav`
  position: absolute; top: 30px; 
  width: 100%;
  height: 65px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  color: #f1f1f1;

  .logo{
    padding: 15px 0;
  }
`

function NewHeader() {
  return (
    <Nav>
        <MainLogo>
            <img src={logo1} alt='' />
        </MainLogo>
        <HamBurgerMenu/>
    </Nav>
  )
}

export default NewHeader