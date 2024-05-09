import { navItems } from '@/cosntants'
import Link from 'next/link'
import AnimatedText from './AnimatedText'

const Navitems = ({isScrolling,activeSession}) => {
  return (
    <ul className={`flex ${isScrolling && 'sm:bg-[#ffffffcc] backdrop:-blur-[16px]'} bg-gray-200/70 rounded-full p-[3px]`}>
        {
            navItems.map((item,index)=>(
                <li  key={index} className={` ${isScrolling && 'md:hover:bg-gray-200/70'} w-[108px] h-[40px] ${activeSession === item.route ?'bg-gray-200/70' : 'text-gray-500/70'} transition-all ease-in-out duration-700 flex-center hover:bg-white rounded-full `}>
                <Link href={item.href} className='font-sans text-[16px] flex-center hover:text-black'>
                <AnimatedText title={item.title} /></Link></li>
            ))
        }
    </ul>
  )
}

export default Navitems