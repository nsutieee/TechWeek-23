import React from 'react'
import styled from 'styled-components'
import { useState } from 'react'
import RightNavBar from './RightNavBar'
import './NewHeader.css'

const StyledBurger = styled.div`
   margin-top: 2rem; margin-right: 1rem;
   transform: ${({open}) => open ? 'scale(1)' : 'scale(2)'};
   width: 2rem;
   height: 2rem;
   position: fixed;
   top: 15px;
   right: 20px;
   z-index: 20;
   display: none;

   @media(max-width: 768px){
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
   }

   div{
    border-radius: 10px;
    width: 2rem;
    height: 0.3rem;
    background-color: ${({ open }) => open ? '#0ae0e5' : '#0ae0e5'};
    transform-origin: 1px;
    transition: all 0.5s linear;
    
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
   }
`

function HamBurgerMenu() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <RightNavBar open={open} />
    </>
  )
}

export default HamBurgerMenu