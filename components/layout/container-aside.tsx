'use client';

import { payrolls } from '@/res/payrolls';
import { ChevronsRight, X } from 'lucide-react';
import { useState } from 'react';
import CalendarAgenda from '../ui/agenda';
import PayrollList from '../ui/payrolls-content';

export default function ResponsiveAside() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden fixed top-72 left-2 z-50 bg-amber-100 dark:bg-(--background-items) text-gray-700 p-3 rounded-md shadow-lg"
        >
          <ChevronsRight className="w-8 h-8" />
        </button>
      )}

      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-72 bg-white dark:bg-zinc-900
          transform transition-transform duration-300 ease-in-out
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:static lg:translate-x-0 lg:block
          lg:max-h-screen lg:overflow-y-auto
          shadow-lg lg:shadow-none
        `}
      >
        <div className="flex justify-between items-center p-4 lg:hidden border-b border-zinc-300 dark:border-zinc-700">
          <span className="font-semibold text-lg text-zinc-800 dark:text-white">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5 text-red-500" />
          </button>
        </div>

        <div className="p-4 flex flex-col gap-6">
          <CalendarAgenda />
          <PayrollList payrolls={payrolls} />
        </div>
      </aside>
    </>
  );
}
