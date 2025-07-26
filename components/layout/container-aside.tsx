'use client';
import { payrolls } from '@/res/payrolls';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import CalendarAgenda from '../ui/agenda';
import PayrollList from '../ui/payrolls-content';

export default function ResponsiveAside() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão de abrir no mobile */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-blue-600 text-white p-2 rounded-md shadow"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Painel responsivo */}
      <aside
        className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-zinc-900 shadow-lg transform transition-transform duration-300 z-40 ${
          open ? 'translate-x-0' : '-translate-x-full'
        } lg:static lg:translate-x-0 lg:block p-4`}
      >
        {/* Fechar no mobile */}
        <div className="flex justify-between items-center mb-4 lg:hidden">
          <span className="font-semibold text-lg">Menu</span>
          <button onClick={() => setOpen(false)}>
            <X className="w-5 h-5 text-red-500" />
          </button>
        </div>

        {/* Conteúdo do aside */}
        

        <div className="mt-6">
          <CalendarAgenda />
          <PayrollList payrolls={payrolls}/>
        </div>
      </aside>
    </>
  );
}
