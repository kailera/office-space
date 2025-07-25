import { Project } from "@/utils/types";
import Image from "next/image";

interface IProjectCard{
    project:Project
}

export default function ProjectCard({project}:IProjectCard){
    return(
        <div className="border rounded-lg p-2 shadow-sm bg-amber-100">
            <h3 className="text-md font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500">Deadline:{project.deadline}</p>
            <div className="flex mt-2 space-x-2">
                {project.participants.map((user, idx)=>(
                    <Image
                        key={idx}
                        src={user.image}
                        alt={user.name}
                        width={24}
                        height={24}
                        className="rounded-full object-cover"
                    />
                ))}
            </div>
        </div>
    )
}