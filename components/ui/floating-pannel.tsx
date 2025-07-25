import { ReactNode } from 'react';

interface IFloatingPanel {
  children: ReactNode;
  position?: 'left' | 'right';
  className?: string;
}

export default function FloatingPanel({
  children,
  position = 'left',
  className = '',
}: IFloatingPanel) {
  const basePosition = position === 'left' ? 'left-4' : 'right-4';

  return (
    <div
      className={`fixed ${basePosition} left-2 sm:left-4 z-50 flex flex-col items-start space-y-2 ${className}`}
    >
      {children}
    </div>
  );
}
