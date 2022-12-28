import React from "react"
import styled from "styled-components"
import './NewHeader.css'


const Ul = styled.ul`
  
   list-style: none;
   gap: 1rem;
   display: flex;
   flex-flow: row nowrap;
  
  li{
    margin-left: 20px;
    gap: 1rem;
    padding: 18px 10px;
    font-family: 'Orbitron', sans-serif;
    font-size: 2rem;
    color: #fff;
    transition: all 300ms ease;
  }
  li:hover{
    color: #0ae0e5;
    transform: scale(1.1);
  }
  
  @media(max-width: 1230px){
    li{
      font-size: 1.5rem;
    }
  }
  @media(max-width: 915px){
    li{
      gap: 0.7rem;
      font-size: 1rem;
    }
  }

  @media(max-width: 768px){
    z-index: 10;
    flex-flow: column nowrap;
    background-color: rgba(255, 255, 255, 0.4);
    position: fixed; top: 0; right: 0;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li{
        color: #0ae0e5;
      }
    
}
`

function RightNavBar( { open }) {
  return ( 
         <Ul open = {open}>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Sign in</li>
            <li>Sign up</li>
        </Ul>
  )
}

export default RightNavBar