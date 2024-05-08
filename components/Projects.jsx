'use client'

import { projectList } from "@/cosntants"
import ProjectTemplate from "./ProjectTemplate"
import { useState } from "react"
import Modal from "./Modal"

const Projects = () => {
    const [modal,setModal] = useState({active:false,index:0})
  return (
    <section id='Projects' className='py-[100px] w-full mb-[100px] '>
        <h3 id='skill-head' className='font-sans text-[38px] md:text-[64px] font-bold  text-grad pb-10 '>Recent Projects</h3>
        <div className="relative  w-full  h-full flex-center flex-col ">
            {
                projectList.map((item,i)=>{
                    return <ProjectTemplate item={item} key={i} index={i} setModal={setModal} /> 
                })
            }

         <Modal modal={modal} projects={projectList}/>   
        </div>

    </section>
  )
}

export default Projects