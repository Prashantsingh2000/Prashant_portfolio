"use client";
import Title from "./Title";
import React from "react";  
import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
    SiGit,
    SiJavascript,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiPython,
    SiReact,
    SiTailwindcss,
    }from "react-icons/si";

export default function Skills() {

   const skills =[
    {
        text: "React",
        Icon: SiReact,
    },
    {
        text: "Next.js",
        Icon: SiNextdotjs,
    },
    {
        text: "Tailwind",
        Icon: SiTailwindcss,
    },
    {
        text: "Postgresql",
        Icon: SiPostgresql,
    },
    {
        text: "Git",
        Icon: SiGit,
    },
    {
        text: "Javascript",
        Icon: SiJavascript,
    },
    {
        text: "Nodejs",
        Icon: SiNodedotjs,
    },
    {
        text: "Python",
        Icon: SiPython,
    },
    
   ];


  return (

    <div className="max-w-5xl mx-auto px-8">

       <Title text="Skills 🎓" 
       className="flex flex-col items-center justify-center -rotate-6"/>

          <HoverEffect items={skills}/>

    </div> 

  );
}


