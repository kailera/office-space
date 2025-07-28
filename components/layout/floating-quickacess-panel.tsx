"use client";
import { QuickApp } from "@/utils/types";
import { useState } from "react";

interface IFloatingQuickAccessPanel {
  apps: QuickApp[];
}

export default function FloatingQuickAccessPanel({
  apps,
}: IFloatingQuickAccessPanel) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="fixed z-50 right-0 top-1/2 flex flex-col items-end space-y-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`transition-all duration-300 ease-in-out px-4 py-3 rounded-l-md shadow-md bg-(--background-items) text-white
                ${
                  isOpen
                    ? "opacity-100 translate-x-0"
                    : "opacity-30 hover:opacity-80 translate-x-full"
                }    
                `}
        style={{ transform: isOpen ? "translateX(0)" : "translateX(-1.5rem" }}
      >
        {isOpen ? "❌" : "🎒"}
      </button>

      <div
        className={`transition-all duration-300 ease-in-out transform ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        } max-w-[90vw] sm:w-64 bg-white dark:bg-zinc-900 shadow-lg rounded-lg p-3 max-h-[60vh] overflow-y-auto`}
      >
        <h2 className="text-lg font-semibold mb-2">QuickLauncher</h2>
        <div className="grid grid-cols-3 gap-3">
          {apps.map((app) => (
            <button
              key={app.id}
              className="flex flex-col items-center justify-center bg-gray-100 rounded hover:bg-blue-100 transition"
            >
              <span className="text-2xl">{app.icon}</span>
              <span className="text-xs text-center mt-1 dark:text-gray-700">{app.name}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
