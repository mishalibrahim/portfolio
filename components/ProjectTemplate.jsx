'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
 
const ProjectTemplate = ({item,index,setModal}) => {
  const projectRef =useRef()
  useGSAP(()=>{
    gsap.to(projectRef.current,{opacity:1,ease:'power2.inOut',duration:0.6,scrollTrigger:{
      trigger:projectRef.current,
    }})
  },[])
  return (
    <div className='flex flex-col w-full opacity-0 gap-2 sm:gap-0' ref={projectRef}>
        <div className='flex sm:hidden '>
            <Image src={item.src} width={400} height={300} alt={item.title} className='w-full object-cover '/>
        </div>
      <Link href={item.href}  className='sm:py-10 py-3 border-b-2 sm:border-y-2 sm:border-b-0 border-black/60 sm:border-black/20 flex  items-center justify-between w-full md:px-20 group ' onMouseEnter={()=>setModal({active:true,index:index})} onMouseLeave={()=>setModal({active:false,index:index})}>
        <h2 className='font sans text-[24px] sm:text-[50px] font-semi-bold group-hover:text-gray-600 group-hover:translate-x-3 transition-all ease-linear duration-200'>
            {item.title}</h2> 
        <p className='font-sans text-[12px] sm:text-[16px] sm:flex sm:items-start sm:justify-start text-gray-600 group-hover:translate-x-[-12px] transition-all ease-linear duration-200'>
            {item.subtitle}</p>
    </Link>
    </div>
  
  )
}

export default ProjectTemplate