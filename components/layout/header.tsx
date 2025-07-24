'use client';
import MotivationalPhrase from '@/components/features/motivational-phrases';
import useClock from '@/utils/clock';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const time = useClock();

  return (
    <header className="w-full border-b bg-white dark:bg-zinc-900 py-2 px-4 flex flex-col gap-2">
      <main className="flex w-full justify-between items-center">
        <span className="text-xl font-bold text-shadow-amber-100">Axero</span>

        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 text-sm rounded-full border-1 border-gray-400 w-36 sm:w-64 md:w-80 transition-all"
        />

        <section className="sm:hidden relative">
          <button className='p-2' onClick={() => setNotificationsOpen((prev) => !prev)}>🛎️</button>
          <div
            className={`
              absolute right-0 top-8 p-2 bg-amber-50 dark:bg-slate-800 rounded shadow transition-all duration-300 ease-out z-50
              flex-col gap-2
              ${notificationsOpen ? 'flex opacity-100 translate-y-0' : 'hidden opacity-0 -translate-y-2'}
            `}
          >
            <div>🔔</div>
            <div>💬</div>
            <div>➕</div>
            <div>🧑‍⚕️</div>
          </div>
        </section>

        <section className="hidden sm:flex gap-3 items-center">
          <div>🔔</div>
          <div>💬</div>
          <div>➕</div>
          <div>🧑‍⚕️</div>
        </section>
      </main>

      <div className="flex sm:hidden justify-start">
        <button onClick={() => setNavOpen((prev) => !prev)}>
          {navOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      <section className="flex flex-row justify-center items-start sm:items-center sm:flex-row transition-all duration-300">
        <nav
          className={`
            w-full sm:w-auto flex-col sm:flex-row gap-2 sm:gap-4
            transition-all duration-300 ease-out
            overflow-hidden
            ${navOpen ? 'flex opacity-100 translate-y-0' : 'hidden sm:flex opacity-0 sm:opacity-100'}
          `}
        >
          <div>Home</div>
          <div>News</div>
          <div>Events</div>
          <div>People</div>
          <div>Activity</div>
        </nav>

        <div className="flex flex-row items-center gap-3 mt-2 sm:mt-0 sm:ml-auto">
            <h2>{time}</h2>
            <MotivationalPhrase/>
        </div>
      </section>
          
    </header>
  );
}
