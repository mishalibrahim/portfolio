'use client'
import { SkillsItem } from '@/cosntants'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)
const Skills = () => {
    useGSAP(() => {
        gsap.to('#skill-head', {y:0,
            opacity: 1, scrollTrigger: {
                trigger: '#skill-head',
            },
            ease:'power2.inOut',duration:0.8,
        })
        gsap.to('#skill-item',{
            opacity:1,y:0,scrollTrigger:{
                trigger:'#skill-item',
            },
            stagger:0.03,ease:'power2.inOut',duration:1
        })
    }, [])
    return (
        <section id='skills' className='py-[100px] w-full h-full'>
            <h3 id='skill-head' className='font-sans text-[30px] md:text-[48px] font-bold  text-grad pb-10 opacity-0 translate-y-10'>My Skills</h3>
            <div className='relative  lg:px-5 rounded-md w-full h-full lg:py-10'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full md:gap-5 gap-2'>
                    {
                        SkillsItem.map((item, i) => (
                            <div
                                id='skill-item'
                                className='h-[50px] translate-y-5 flex-center shadow-ms border-4  rounded-full relative overflow-hidden hover:shadow-[5px_5px_0px_0px_rgba(102,102,102)] opacity-0' key={i}>
                                <p className='font-sans text-[1rem]'>{item.title}</p>
                                <div className='absolute right-[-10px] top-0 w-[50px] h-[50px]'>
                                    <Image src={item.src} width={50} height={50} alt={item.title} className='object-cover rotate-45 ' />
                                </div>
                            </div>
                        )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default Skills