'use client'
import { Project } from "@/utils/types";
import { useState } from "react";
import ProjectsCarousel from "../ui/projects-carousel";

interface IFloatingPanelProject {
  projects: Project[];
}

export default function FloatingPanelProject({ projects }: IFloatingPanelProject) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-50 right-0 top-32 flex flex-col items-end space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-all duration-300 ease-in-out p-2 rounded-l-md shadow-md bg-blue-600 text-white 
          ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-30 hover:opacity-80 translate-x-full'}
        `}
        style={{ transform: isOpen ? 'translateX(0)' : 'translateX(-1.5rem)' }} // faz o botão "colar" na borda
      >
        {isOpen ? '❌' : '📁'}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full pointer-events-none'
        } w-[90vw] sm:w-72 bg-amber-100 shadow-lg rounded-lg p-3 max-h-[80vh] sm:max-h-[60vh] overflow-hidden`}
      >
        <h2 className="text-lg font-semibold mb-2">Projetos</h2>
        <ProjectsCarousel projects={projects} />
      </div>
    </div>
  );
}
