import type { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, className }: ButtonProps) => {
  return (
    <button className={className} onClick={undefined}>
      {children}
    </button>
  );
};
