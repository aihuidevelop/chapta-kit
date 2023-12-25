import type { ReactNode } from 'react';

export const Code = ({ children, className }: { children: ReactNode; className?: string }): ReactNode => {
  return <code className={className}>{children}</code>;
};
