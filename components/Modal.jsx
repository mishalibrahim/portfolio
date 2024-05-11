'use client'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';

const Modal = ({modal,projects}) => {
    const scaleAnimation ={
        initial:{
            scale:0,
            x:'-50%',
            y:'-50%'
        },
        open:{
            scale:1,
            x:'0%',
            y:'0%',transition:{duration:0.4 ,ease:[0.76,0,0.24,1]}
        },
        close:{
            scale:0,
            x:'-50%',
            y:'-50%',transition:{duration:0.4 ,ease:[0.32,0,0.67,0]}
        }
    }
    const scaleTextAnimation ={
        initial:{
            scale:0,
            x:'-50%',
            y:'-50%'
        },
        open:{
            scale:1,
            x:'100%',
            y:'100%',transition:{duration:0.4 ,ease:[0.76,0,0.24,1]}
        },
        close:{
            scale:0,
            x:'-50%',
            y:'-50%',transition:{duration:0.4 ,ease:[0.32,0,0.67,0]}
        }
    }
    const {active,index} = modal;
    const container=useRef()
    const mouseContainer= useRef()

    useEffect(()=>{
        const moveContainerX=gsap.quickTo(container.current,"left",{duration:0.8,ease:'power3'})
        const moveContainerY=gsap.quickTo(container.current,"top",{duration:0.8,ease:'power3'})
        const mouseContainerX=gsap.quickTo(mouseContainer.current,"left",{duration:0.5,ease:'power3'})
        const mouseContainerY=gsap.quickTo(mouseContainer.current,"top",{duration:0.5,ease:'power3'})

        window.addEventListener('mousemove',(e)=>{
            const {clientX,clientY} = e
            const containerWidth = container.current.offsetWidth;
            const centerX = clientX - containerWidth / 2;
            const containerHeight = container.current.offsetHeight;
            const centerY = clientY - containerHeight / 2 ;
            const mouseWidth = container.current.offsetWidth;
            const mousecenterX = clientX - mouseWidth / 2;
            const mosueHeight = container.current.offsetHeight;
            const mousecenterY = clientY - mosueHeight / 2 ;
            moveContainerX(centerX);
            moveContainerY(centerY);
            mouseContainerX(mousecenterX);
            mouseContainerY(mousecenterY);
        })
    },[])

  return (
    <>
    <motion.div ref={container} variants={scaleAnimation} initial={'initial'} animate={active ? 'open' :'close'} className='hidden  pointer-events-none  fixed   md:flex-center  w-[240px] h-[250px] overflow-hidden'>
        <div className={`w-full h-full  absolute transition-all duration-500 `} style={{top: index * -100 + '%'}}>
        {
            projects.map((item,i)=>{
                return<div key={i} className={` w-full h-full flex-center relative`} style={{backgroundColor:item.color}}>
                    <Image src={item.src} alt={item.title} width={200} height={0} className='object-cover h-auto' />
                </div>
              
            })
        }
        </div>
    </motion.div>
    <motion.div variants={scaleTextAnimation} initial={'initial'} animate={active ? 'open' :'close'}  ref={mouseContainer} className='hidden  pointer-events-none md:flex-center w-[80px] h-[80px] rounded-full bg-blue-500 fixed'>
        <p  className='text-white font-sans'>View</p>
    </motion.div>
    </>
  )
}

export default Modal