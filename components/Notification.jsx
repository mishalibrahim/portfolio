'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import React, { useLayoutEffect } from 'react'

const Notification = () => {
    useLayoutEffect(()=>{
        gsap.to('#notification-bar',{
            x:0,ease:'power2.inOut',duration:0.6,opacity:1,delay:0.3
        })
    },[])

  return (
    <div id='notification-bar' className='fixed right-0 top-32 z-50 bg-[#ffffffcc] backdrop-blur-[16px] opacity-0  hidden'>
        <div id='notification-tem' className='w-[250px] h-60px p-3 rounded-l-2xl transition-all  '>
            <h3 className='border-b-2 border-black font-sans'>Notification</h3>
            <p className='font-sans'>Congratulation , your message has  been sent</p>
        </div>
    </div>
  )
}

export default Notification