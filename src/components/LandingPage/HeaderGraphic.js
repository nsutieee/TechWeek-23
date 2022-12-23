import React from 'react'
import Lottie from 'lottie-react'
import graphic1 from '../videos/HeaderGraphic1.json'

function HeaderGraphic() {
  return (
    <>
    <Lottie animationData= {graphic1} loop={true}/>
    </>
  )
}

export default HeaderGraphic