"use client"
import React from 'react'
import {motion } from 'framer-motion'

const TransitionVariants = {
    initial: {
        y: "100%",
        height: '100%'
    },
    animate: {
        y: '0%',
        height: '0%'
    },
    exit: {
        y: ["0%", "100%"],
        height: ["0%", "100%"]
    }
}

const Transition = () => {
  return (
    <div>
        <motion.div 
        className='fixed right-0 h-screen w-screen bottom-full z-[30] bg-[#2e2257]'
        variants={TransitionVariants}
        initial="initial"
        exit="exit"
        animate="animate"
        >

        </motion.div>
    </div>
  )
}

export default Transition