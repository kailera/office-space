'use client';
import Image from 'next/image';

export default function FloatingChatLauncher({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full w-12 h-12 border-2 border-blue-500 bg-white shadow-lg hover:scale-105 transition"
    >
      <Image
        src="/img/avatar.png"
        alt="Chat Avatar"
        width={48}
        height={48}
        className="rounded-full w-full h-full object-cover"
      />
    </button>
  );
}
