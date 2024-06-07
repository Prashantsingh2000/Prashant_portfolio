import { cn } from '@/lib/utils'
import { link } from 'fs'
import Link from "next/link"
import React from 'react'
import { SiGithub, SiLinkedin, SiX, SiWhatsapp,} from 'react-icons/si'

export default function Navbar( {classname}:{classname?:string}) {
  
    const socials = [

        {
            link:"http://wa.me/919889287415",
            label: "Whatsapp",
            Icon: SiWhatsapp,
        
        },
        {
            link:"https://www.linkedin.com/in/prashant-singh-9991b7208/",
            label: "Linkedin",
            Icon: SiLinkedin,
        
        },

        {
            link:"https://www.linkedin.com/in/prashant-singh-9991b7208/",
            label: "X",
            Icon: SiX,
        
        },
        {
            link:"https://github.com/Prashantsingh2000/",
            label: "Github",
            Icon: SiGithub,
        
        }
    ]





  return (
    <nav className={cn("py-10 flex justify-between items-center animate-move-down",classname)}>
       <h1 className="text-2xl font-bold underline underline-offset-8 decoration-green-500 -rotate-2"> Prashant 🙋🏻‍♂️</h1>
       
       <div className="flex items-center gap-5">

        {socials.map((social,index)=>{
            const Icon =social.Icon;

            return (
            <Link 
            href={social.link} 
            key={index} 
            // eslint-disable-next-line jsx-a11y/aria-props
            aria-Label={social.label}>

               <Icon className="w-5 h-5 hover:scale-125 transition-all"/> 

            </Link>
            );
        })}
       </div>
    </nav>

  )
}


