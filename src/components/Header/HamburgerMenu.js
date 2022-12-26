import React from 'react'
import './Hamburger.css'
import { useState } from 'react'

function HamburgerMenu() {

  const[open, setOpen] = useState(false)

  return (
    <div className='HamburgerIcon' onClick={setOpen(!open)}>
        <div className='Hamburger_Bar'></div>
        <div className='Hamburger_Bar'></div>
        <div className='Hamburger_Bar'></div>
    </div>
  )
}

export default HamburgerMenu