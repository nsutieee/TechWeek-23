import React from 'react'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import loadingvideo from '../videos/LoadingVideo.mp4'

function LoadingScreen() {

   const[playing, setPlaying] = useState(true)

   const EndHandler = () => {
    setPlaying(false);
   }

  return (
    <>
       <AnimatePresence>
           {playing && <motion.div
               style={{position: "relative",
               width: "100vw",
               height: "100vh",
               display: "flex",
               backgroundColor: "black",
               overflow: "hidden", }}

               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity:0 }}
               >
                
               <video  
               style = {{ height: "100vh", width: "100vw" }}
               autoPlay
               muted
               src={loadingvideo}
               onClick={(e) => e.target.play()}
               preload='auto'
               type='video/mov'
               onEnded={EndHandler}
               /> 

                </motion.div>}
       </AnimatePresence>

       {!playing && <Navigate to ='/home' />}
    </>
  )
}

export default LoadingScreen