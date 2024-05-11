'use client'
import Image from 'next/image'
import React from 'react'
import AnimatedText from './AnimatedText'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'

const Hero = () => {
    useGSAP(()=>{
        gsap.to('.hero-text',{
            y:0,opacity:1,duration:0.3,stagger:0.3,ease:'power2.inOut'})
        gsap.to('#hero-img',{
            x:0,opacity:1,duration:0.6,ease:'power2.inOut'
        })
    },[])
    return (
        <div className='w-full py-[50px]  flex-center'>
            <div className=" grid grid-cols-1  lg:py-[50px] gap-5 sm:gap-0 ">
                <div className='col-span-2 flex-center flex-col '>
                    <p className='font-sans sm:text-[28px] text-[18px] font-bold opacity-0 hero-text text-center text-grad pt-5' >Hey,I'm Mishal<span className='text-yellow-400'>&#129304;</span>  </p>
                    <h3 className='text-hero opacity-0 hero-text lg:w-[800px] py-5'>Building digital platforms, brands, and immersive experiences. </h3>
                    <p className='hero-text md:w-[450px] font-sans text-grad font-semibold text-center pb-5 sm:text-[20px] text-[16px] opacity-0'>Specializing in React and Next.js, I create responsive web platforms with interactive experiences.</p>
                    <button className='relative  mt-5 hero-text opacity-0 font-sans font-normal w-[200px] h-[50px] flex-center bg-gradient-to-tl from-gray-500 to-gray-900 rounded-full text-white '>
                        <a href='/assets/document/cv.pdf' className='absolute w-full h-full' download></a>
                        <AnimatedText title={'Download CV'}/>
                    </button>
                    </div>
                <div className='flex-center row-start-1 '>
                    <div id='hero-img' className='translate-x-[100px] opacity-0 w-[200px] h-[200px] rounded-full  flex-center bg-gradient-to-tl from-lime-200 to-stone-300'>
                    <Image alt='hero' src='/assets/images/dev.webp' width={200} height={200} className='w-[170px] h-auto object-cover'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero 