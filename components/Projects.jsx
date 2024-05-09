'use client'
import { projectList } from "@/cosntants"
import ProjectTemplate from "./ProjectTemplate"
import Modal from "./Modal"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { gsap } from "gsap"
import { useState } from "react"

gsap.registerPlugin('ScrollTrigger')
const Projects = () => {
    const [modal,setModal] = useState({active:false,index:0})
    useGSAP(()=>{
      gsap.to('#skill-head',{y:0,ease:'power2.inOut',duration:0.6,delay:0.6,
        ScrollTrigger:{
            trigger:'#Projects',
            start:'top center'
        }
      })
    },[])
  return (
    <section id='Projects' className='py-[100px] w-full mb-[100px] '>
        <h3 id='skill-head' className='font-sans text-[38px] md:text-[64px] font-bold  text-grad pb-10 opacity-0 '>Recent Projects</h3>
        <div className="relative  w-full  h-full flex-center flex-col ">
            {
                projectList.map((item,i)=>{
                    return <ProjectTemplate  item={item} key={i} index={i} setModal={setModal} /> 
                })
            }

         <Modal modal={modal} projects={projectList}/>   
        </div>

    </section>
  )
}

export default Projects