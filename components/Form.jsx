'use client'
import React, { useEffect, useRef, useState } from 'react'
import AnimatedText from './AnimatedText'
import emailjs from 'emailjs-com'

const Form = () => {
    const formRef= useRef();
    const [data,setData] =useState({
        name:'',email:'',about:'',projectname:''
     })

    const handleSubmit =(e)=>{

        e.preventDefault();
        emailjs.send('service_ukcbypn','template_mb9uetv',data,'HU4l0DpnTc6FV74vH')
        .then(() =>{
            console.log('success');
        },
        (error) =>{
            console.log('error',error);
        })
    }
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setData(
            {
                ...data,
                [name]:value
            }
        )
    }
    
  return (
    <form ref={formRef} className='col-span-2 ' onSubmit={handleSubmit}>
        <div className='flex flex-col md:flex-row gap-4 md:p-3 '>
        <div className=' flex flex-col gap-5 flex-1'>
        <label htmlFor="" className='w-full flex flex-col gap-2'>
            <span className='font-sans text-white text-[16px] '>Name</span>
            <input  
             className='h-[50px] w-full px-2 bg-transparent border-b-2 border-gray-200/20  focus:outline-none text-white/90 font-sans' onChange={handleChange} name='name' value={data.name} placeholder='Enter your name'/>
        </label>
        <label htmlFor="" className='w-full flex flex-col gap-2'>
            <span className='font-sans text-white text-[16px] '>Email</span>
            <input className='h-[50px] w-full px-2 bg-transparent border-b-2 border-gray-200/20  focus:outline-none text-white/90 font-sans' type='email' name='email' value={data.email}
            onChange={handleChange} placeholder='Enter your Email'/>
        </label>
        <label htmlFor=""className='w-full flex flex-col gap-2' > 
            <span className='font-sans text-white text-[16px]'>Project Name</span>
            <input
            onChange={handleChange} name='projectname' value={data.projectname} className='h-[50px] w-full px-2 bg-transparent border-b-2 border-gray-200/20  focus:outline-none text-white/90 font-sans' placeholder='Enter your Project Name'/>
        </label>
        </div>
        <div className='flex  gap-5 flex-1'>
        <label htmlFor="" className='w-full flex flex-col gap-2 flex-1'>
            <span className='font-sans text-white text-[16px] '>About the Project</span>
            <textarea name='about' value={data.about} onChange={handleChange} className='max-h-full sm:flex-1 text-white/90 font-sans w-full px-3 bg-transparent border-b-2 border-gray-200/20  focus:outline-none' placeholder='Enter your Project Details'/>
        </label>
        </div>
        </div>
        <div className='flex justify-end'>
            <button type='submit' className=' mt-5 hero-text opacity-0 font-sans font-normal w-[200px] h-[50px] flex-center bg-gradient-to-tl from-gray-500 to-gray-900 rounded-full text-white '>
                        <AnimatedText title={'Submit'}/>
                    </button>
        </div>
    </form>
  )
}

export default Form