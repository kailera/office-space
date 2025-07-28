'use client';
import clsx from 'clsx';
import { useState } from 'react';

const daysInAugust = Array.from({ length: 31 }, (_, i) => i + 1);

const events = [2, 8, 14, 21, 30]; // dias com eventos

export default function CalendarAgenda() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="text-sm">
      <h2 className="text-lg font-semibold mb-2">August 2025</h2>
      <div className="grid grid-cols-7 gap-2 text-center">
        {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, index) => (
          <div key={`${day}-${index}`} className="font-semibold text-gray-500 dark:text-gray-400">
            {day}
          </div>
        ))}

        {Array(5).fill(null).map((_, i) => (
          <div key={`empty-${i}`} />
        ))}

        {daysInAugust.map((day) => {
          const isEvent = events.includes(day);
          const isSelected = selected === day;

          return (
            <button
              key={day}
              onClick={() => setSelected(day)}
              className={clsx(
                'w-8 h-8 rounded-full flex items-center justify-center text-sm transition',
                isSelected
                  ? 'bg-blue-500 text-white'
                  : 'hover:bg-blue-100 dark:hover:bg-zinc-700',
                isEvent && !isSelected && 'relative'
              )}
            >
              {day}
              {isEvent && !isSelected && (
                <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-red-500 rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
