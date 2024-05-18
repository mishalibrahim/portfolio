'use client'
import { useGSAP } from '@gsap/react'
import React from 'react'
import { gsap } from 'gsap'

const About = () => {
  useGSAP(()=>{
    gsap.to('#About-text',{
      y:0,duration:0.6,ease:'power2.inOut',opacity:1,scrollTrigger:{
        trigger:'#About',
        start:'top center',
        end:'+=100'
      }
    })
  })
  return (
   <section className='w-full h-full transition-all pt-[100px] sm:pt-0  py-[50px]' id='About'>
      <div className='lg:p-[100px] flex-center'>
          <p id='About-text' className='font-sans font-medium text-[18px] lg:text-[35px] md:w-[600px] lg:w-[800px] opacity-0 text-gray translate-y-20'>
            <span className='font-bold md:text-[30px] lg:text-[40px] text-[20px] '>Mishal{' '}</span>
             is a full-stack developer with a passion for crafting exceptional user experiences through front-end development.
             With a keen focus on creating intuitive
             interfaces and delivering seamless interactions, I strive to elevate digital experiences to new heights.
          </p>
      </div>

   </section>
  )
}

export default About 