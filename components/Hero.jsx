'use client'
import Image from 'next/image'
import React from 'react'
import AnimatedText from './AnimatedText'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Hero = () => {
    useGSAP(()=>{
        gsap.to('.hero-text',{
            y:0,opacity:1,duration:0.3,stagger:0.5,ease:'power2.inOut'})
        gsap.to('#hero-img',{
            x:0,opacity:1,duration:0.6,ease:'power2.inOut'
        })
    },[])
    return (
        <div className='w-full py-[100px]  flex-center'>
            <div className=" grid grid-cols-1  lg:py-[50px] gap-5 sm:gap-0 ">
                <div className='col-span-2 flex-center flex-col '>
                    <h1 className='text-hero opacity-0 hero-text text-center' >Hey,I'm Mishal </h1>
                    <h3 className='text-hero opacity-0 hero-text lg:w-[900px]'>A passionate Web Developer </h3>
                    <button className='relative  mt-5 hero-text opacity-0 font-sans font-normal w-[200px] h-[50px] flex-center bg-gradient-to-tl from-gray-500 to-gray-900 rounded-full text-white '>
                        <a href='/assets/document/cv.pdf' className='absolute w-full h-full' download></a>
                        <AnimatedText title={'Download CV'}/>
                    </button>
                    </div>
                <div className='flex-center row-start-1 '>
                    <div id='hero-img' className='translate-x-[100px] opacity-0 w-[250px] h-[250px] rounded-full  flex-center bg-gradient-to-tl from-lime-200 to-stone-300'>
                    <Image alt='hero' src='/assets/images/dev.webp' width={200} height={200} className='w-[200px] h-auto object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero 