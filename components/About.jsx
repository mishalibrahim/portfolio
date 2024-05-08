'use client'
import { useGSAP } from '@gsap/react'

import React from 'react'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'
gsap.registerPlugin(ScrollTrigger) 
const About = () => {
  useGSAP(()=>{
    gsap.to('#About-text',{
      y:0,duration:0.6,ease:'power2.inOut',opacity:1,scrollTrigger:{
        trigger:'#About',
        start:'top center',
        end:'+=200'
      }
    })
  })
  return (
   <section className='w-full h-full transition-all' id='About'>
      <div className='lg:p-[100px] flex-center'>
          <p id='About-text' className='font-sans font-medium text-[28px] lg:text-[40px] lg:w-[900px] opacity-0 text-gray '>
            <span className='font-bold lg:text-[48px] text-[30px] '>Mishal{' '}</span>
             is a full-stack developer with a passion for crafting exceptional user experiences through front-end development.
             With a keen focus on creating intuitive
             interfaces and delivering seamless interactions, I strive to elevate digital experiences to new heights.
          </p>
      </div>

   </section>
  )
}

export default About 