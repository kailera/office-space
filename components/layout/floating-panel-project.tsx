'use client'

interface IFloatingPanelProject{
    projects:Project[]
}
import { Project } from "@/utils/types"
import { useState } from "react"
import ProjectsCarousel from "../ui/projects-carousel"

export default function FloatingPanelProject({projects}:IFloatingPanelProject){
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="fixed right-2 sm:right-4 z-50">

            <button
            onClick={()=> setIsOpen(!isOpen)}
            className="bg-blue-600 text-white p-2 rounded-md shadow mb-2 sm:mb-0"> 
                {isOpen? '❌':'📁'}
            </button>

            <div className={`transition-all duration-300 ${
                isOpen?'opacity-100 translate-x-0':'opacity-0 translate-x-full pointer-events-none'
            } fixed sm:static top-16 sm:top-auto right-0 sm:right-0 w-[90w] sm:w-64 bg-amber-100 shadow-lg rounded-lg p-3 max-h-[80vh] sm:max-h-[60vh] flex flex-col`}>
                <h2 className="text-lg"> Projetos </h2>
                <ProjectsCarousel projects={projects}/>
            </div>
        </div>
    )
}