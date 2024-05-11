'use client'
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'
import Form from './Form'

const Footer = () => {
  const firstText = useRef();
  const secondText = useRef();


  let xPercent = 0;
  let direction = -1;
  useGSAP(() => {


    requestAnimationFrame(animation);
  }, [])

  const animation = () => {
    if (xPercent <= -114) {
      xPercent = 0
    }

    gsap.set(firstText.current, { xPercent: xPercent, ease: 'power2.inOut' });
    gsap.set(secondText.current, { xPercent: xPercent, ease: 'power2.inOut' });

    xPercent += 0.18 * direction;
    requestAnimationFrame(animation)
  }

  return (
    <footer id='contact-form' className='sticky z-10  bg-gradient-to-r from-gray-800 to-neutral-800 pt-[50px] sm:pt-[100px] bottom-0   overflow-hidden flex flex-col'>
      <div className='bg-white py-2 '>
        <div className='relative whitespace-nowrap flex' >
          <p className='text-[5vw] font-sans font-bold  text-grad uppercase ' ref={firstText}>Lets Create Project Together</p>
          <p className='text-[5vw] font-sans font-bold  absolute left-[100%] top-0 text-grad uppercase' ref={secondText}>Lets Create Project Together</p>
        </div>
      </div>
      <div className='grid sm:grid-cols-3 grid-cols-1 common-padding font-bold '>
        <h3 className='text-white lg:text-[80px] text-[30px] font-sans  '>Lets Get Started.</h3>
        <Form/>
      </div>
      <div className='flex flex-col  sm:flex-row sm:justify-between common-padding'>
        <div className='relative'>
          <p className='round-block-white text-white font-sans px-3 '>er.mishalibrahim@gmail.com</p>
        </div>
        <div className='relative'>
        <p className='round-block-white text-white font-sans px-3 '>&copy; MishalIbrahim 2024</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer