'use client'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
const AnimatedText = ({ title }) => {
    const [isHovered,setIsHovered] =useState(false)
    return (
        <motion.div className='relative overflow-hidden' onMouseEnter={()=>setIsHovered(true)}
        onMouseLeave={()=>setIsHovered(false)}>
            <AnimatedWord  title={title}  animation={letterAnimation} hover={isHovered}/>
            <div className='absolute top-0'>
                <AnimatedWord title={title} animation={letterAnimationTwo} hover={isHovered}  />
            </div>
        </motion.div>
    )
}
const titleAnimation ={
    rest:{
        transition:{
            staggerChildren:0.003
        }
    },
    hover:{
        transition:{
            staggerChildren:0.003
        }
    }
}
const letterAnimation ={
    rest:{
        y:0,
    },hover:{
        y:-25,
        transition:{
            duration:0.3,
            ease:[0.6,0.01,0.05,0.95],
            type:'tween'
        }
    }
}
const letterAnimationTwo ={
    rest:{
        y:25,
    },hover:{
        y:0,
        transition:{
            duration:0.3,
            ease:[0.6,0.01,0.05,0.95],
            type:'tween'
        }
    }
}
const AnimatedWord = ({ title ,animation,hover}) => {
    return (
        <motion.span variants={titleAnimation} initial="rest" animate={hover ? 'hover' : 'rest'} className='whitespace-nowrap relative'>
            {
                title.split("").map((char, i) =>
                    char === " " ? <span  key={i}>&nbsp;</span>
                        : <motion.span variants={animation}  className='relative inline-block whitespace-nowrap' key={i}>{char}</motion.span>)
            }
        </motion.span>
    )   
}
export default AnimatedText