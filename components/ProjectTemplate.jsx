import Link from 'next/link'
import React from 'react'

const ProjectTemplate = ({item,index,setModal}) => {
  return (
    <Link href={item.href}  className='py-10 border-y-2 flex justify-between w-full md:px-20 group' onMouseEnter={()=>setModal({active:true,index:index})} onMouseLeave={()=>setModal({active:false,index:index})}>
        <h2 className='font sans text-[38px] sm:text-[50px] font-semi-bold group-hover:text-gray-600 group-hover:translate-x-3 transition-all ease-linear duration-200'>
            {item.title}</h2> 
        <p className='font-sans text-[12px] sm:text-[16px] flex-center text-gray-600 group-hover:translate-x-[-12px] transition-all ease-linear duration-200'>
            Frontend</p>

    </Link>
  )
}

export default ProjectTemplate