import React, { useState } from 'react'
import {motion } from 'framer-motion'

interface Props {
    image: string;
    title: string;
     text: string;
}

const ProjectCard = ({image, title, text}: Props) => {
   const [isFlipped, setIsFlipped] =  useState(false);
   const [isAnimating, setIsAnimating] = useState(false);
   
   function handleFlip() {
    if(!isAnimating) {
        setIsFlipped(!isFlipped)
        setIsAnimating(true)
    }
   }

  return (
    <div
    onClick={handleFlip}
    className='w-[450px] h-[280px] rounded-md cursor-pointer'
    >
        <motion.div
        className='flip-card-inner w-full h-full '
        initial={false}
        animate={{rotateY: isFlipped ? 180 : 360 }}
        transition={{duration: 0.6, animationDirection: 'normal'}}
        onAnimationComplete={() => setIsAnimating(false)}
        >
            <div 
            style={{backgroundImage: 'url'}}
            
            className='w-full h-full flip-card-front bg-cover bg-center text-white rounded-lg p-4'></div>

        </motion.div>
    </div>
  )
}

export default ProjectCard