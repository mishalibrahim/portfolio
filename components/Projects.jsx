'use client'

import { projectList } from "@/cosntants"
import ProjectTemplate from "./ProjectTemplate"
import { useRef, useState } from "react"
import Modal from "./Modal"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { gsap } from "gsap"

gsap.registerPlugin('scrollTrigger')
const Projects = () => {
    const [modal,setModal] = useState({active:false,index:0})
    const projectitem=useRef()
    useGSAP(()=>{
      gsap.to('#skill-head',{y:0,ease:'power2.inOut',duration:0.6,delay:0.6,
        scrollTrigger:{
            trigger:'#Projects',
            start:'top center'
        }
      })
      gsap.to(projectitem.current,{y:0,ease:'power2.inOut',duration:0.6,delay:0.6,
      scrollTrigger:{
          trigger:'#Projects',
          
      },
      stagger:0.3
    })
    },[])
  return (
    <section id='Projects' className='py-[100px] w-full mb-[100px] '>
        <h3 id='skill-head' className='font-sans text-[38px] md:text-[64px] font-bold  text-grad pb-10 opacity-0 '>Recent Projects</h3>
        <div className="relative  w-full  h-full flex-center flex-col ">
            {
                projectList.map((item,i)=>{
                    return <ProjectTemplate ref={projectitem} item={item} key={i} index={i} setModal={setModal} /> 
                })
            }

         <Modal modal={modal} projects={projectList}/>   
        </div>

    </section>
  )
}

export default Projects