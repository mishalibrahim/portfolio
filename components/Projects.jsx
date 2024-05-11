'use client'
import { projectList } from "@/cosntants"
import ProjectTemplate from "./ProjectTemplate"
import Modal from "./Modal"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { gsap } from "gsap"
import { useRef, useState } from "react"

gsap.registerPlugin(ScrollTrigger)
const Projects = () => {
    const [modal,setModal] = useState({active:false,index:0})
    const projectRef= useRef()
    useGSAP(()=>{
      gsap.to('#project-head',{y:0,ease:'power2.inOut',duration:0.8,opacity:1,
        scrollTrigger:{
            trigger:projectRef.current,
        }
      })
    },[])
  return (
    <section id='Projects' ref={projectRef} className='pb-[100px] w-full  '>
        <h3 id='project-head' className='font-sans text-[30px] md:text-[48px] font-bold  text-grad pb-10 opacity-0 translate-y-10'>Recent Projects</h3>
        <div className="relative  w-full  h-full flex-center flex-col gap-4 sm:gap-0">
            {
                projectList.map((item,i)=>{
                    return <ProjectTemplate   item={item} key={i} index={i} setModal={setModal} /> 
                })
            }

         <Modal modal={modal} projects={projectList}/>   
        </div>

    </section>
  )
}

export default Projects