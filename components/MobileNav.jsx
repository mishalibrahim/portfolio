import { mobilenavItems } from '@/cosntants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Link from 'next/link'
import React from 'react'
const MobileNav = ({Active}) => {
    useGSAP(()=>{
       Active ? gsap.to('#openNav',{y:0,opacity:1,duration:1,ease:'power2.inOut'}) :
                gsap.to('#openNav',{y:-600,opacity:0,duration:1,ease:'power2.inOut'})
        Active ? gsap.to('#navLink',{opacity:1,duration:0.1,stagger:0.2,ease:'power2.inOut'})
                : gsap.to('#navLink',{opacity:0,duration:0.1,stagger:0.2,ease:'power2.inOut'})
    },[Active])
  return (
            <div id='openNav' className={`absolute top-[70px] pb-20  y-10 w-full bg-[#f5f5f3] flex flex-col justify-between md:hidden gap-10  z-30 opacity-0`}>
            {
                mobilenavItems.map((item,i)=>(
                    <Link id='navLink' className='opacity-0 w-full h-[60px] flex-center font-sans text-[3rem] uppercase font-[400]' href={item.href} key={i}>{item.title}</Link>
                ))
            }
        </div>
  )
}

export default MobileNav