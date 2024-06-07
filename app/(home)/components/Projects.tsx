import React from "react";
import {
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  }from "react-icons/si";
import Title from "./Title";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { DirectionAwareHover } from "@/components/ui/direction-aware-hover";

export default function Projects() {

  const projects =[
  {
      title:"Portifolio to Discribe MySelf",
      tech:[SiJavascript,SiNodedotjs,SiTailwindcss],
      link:"http://localhost:3002",
      cover: "/project-1.png",
      background:"bg-indigo-500",
  },
  {
    title:"Spitify music app",
    tech:[SiReact,SiNextdotjs,SiTailwindcss],
    link:"http://localhost:3002",
    cover: "/project-2.png",
    background:"bg-green-500",
}
    ];

  return ( 
    <div className="py-10 p-5 sm:p-0">
       <Title text="Project 🗂️" 
       className="flex flex-col items-center justify-center rotate-6"/>
     
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-20 gap-7">
        {projects.map((project,index) =>{
          return(
             <Link href={project.link} key={index} >
          
          <div className={cn("p-5 rounded-md", project.background)}>

          <DirectionAwareHover 
          imageUrl={project.cover} className="w-full space-y-5 cursor-pointer">

            <h1>{project.title}</h1>

           <div className="flex items-center gap-3">
            {project.tech.map((Icon,index)=>{
            return (
            <Icon className="w-5 h-9"
            key={index}/>
            );
         })}
            </div>             

          </DirectionAwareHover>
           


          </div>

          </Link>
          )
        })}
      </div>
    </div>
  );
}
