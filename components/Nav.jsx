'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Navitems from './Navitems'
import MobileNav from './MobileNav'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Nav = () => {
  const [activeSession, SetActiveSession] = useState(null)
  const [isScrolling, setIsScrolling] = useState(false)
  const [isActive, setIsActive] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }
  const handlescroll = () => {
    if (window.scrollY >= window.innerHeight - 500) {
      setIsScrolling(true);
    }
    else {
      setIsScrolling(false);
    }

    const sections = document.querySelectorAll('section')

    const scrollPosition = window.scrollY + 550;

    sections.forEach((section) => {
      const top = section.offsetTop;
      const bottom = top + section.offsetHeight

      if (scrollPosition >= top && scrollPosition <= bottom) {
        SetActiveSession(section.id)
      }
    })
  }
  useEffect(() => {
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll)
    }
  }, [])

  useGSAP(() => {
    gsap.to('.nav-text', {
      y: 0, duration: 0.6, ease: 'power2.inOut', stagger: 0.2
    })
  }, [])
  return (
    <header className={`w-full flex flex-col h-[60px] ${isScrolling && 'md:h-[40px] md:top-7'} fixed md:top-5 transition-all ease-in-out duration-700  z-30 lg:px-5 flex-center`}>
      <div className={`flex items-center justify-between sm:bg-transparent bg-[#f5f5f3] 
                         ${isScrolling && 'md:w-[80vw] md:px-10  md:rounded-full md:bg-[#ffffffcc] md:backdrop-blur-[16px] md:h-[55px] '} ${isActive && 'bg-[#f5f5f3]'} transition-all ease-in-out duration-700 common-padding `}>
        <Link href='/' className='nav-text font-sans font-bold text-[18px] bg-gradient-to-r from-gray-600 to-gray-900 bg-clip-text text-transparent '>
          Mishal Ibrahim
          <span className='block font-sans font-thin text-gray-700 text-[12px]'> Software Developer</span>
        </Link>
        <nav className='hidden md:flex nav-text'>
          <Navitems isScrolling={isScrolling} activeSession={activeSession} />
        </nav>
        <div className='w-[108px] relative text-center h-[40px] font-sans text-[15px] md:flex-center hidden nav-text'>
          <Link href='#contact-form' className='round-block'>Contact me</Link>
        </div>
        <div className={`nav-text flex md:hidden relative w-[60px] flex-center h-[40px]}`}>
          <Link href='/' className='round-block font-sans pl-2' onClick={handleClick}>{isActive ? 'Close' : 'Menu'}</Link>
        </div>
      </div>
      <MobileNav Active={isActive} setActive={setIsActive} />
    </header>
  )
}

export default Nav 