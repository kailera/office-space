import { Project } from "@/utils/types";
import { useState } from "react";
import ProjectCard from "./project-card";

interface IProjectsCarousel{
    projects:Project[]
}
export default function ProjectsCarousel({projects}:IProjectsCarousel){
    const [startIndex, setStartIndex] = useState(0)
    const visibleProjects = projects.slice(startIndex, startIndex + 3)

    const canScrollUp = startIndex > 0
    const canScrollDown = startIndex + 3 < projects.length
    
    return (
        <div className="flex flex-col gap-2">
            <div className="flex-justify-between mb-1">
                <button onClick={() => setStartIndex(startIndex - 1)}
                    disabled={!canScrollUp}
                    className="text-sm disabled:opacity-30">
                        ⬆️
                </button>

                <button
                    onClick={()=> setStartIndex(startIndex+1)}
                    disabled={!canScrollDown}
                    className="text-sm disabled:opacity-30"
                >
                    ⬇️
                </button>
            </div>
            <div className="flex flex-col gap-2 overflow-hidden">
                {visibleProjects.map((project)=>(
                     <ProjectCard key={project.id} project={project}/>

                ))}

            </div>
        </div>    
    )   
}