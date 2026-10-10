import type { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'success' | 'destructive' | 'muted' | 'accent' | 'warm';
  className?: string;
}

const variantClasses: Record<NonNullable<BadgeProps['variant']>, string> = {
  success: 'bg-success/15 text-success border-success/30',
  destructive: 'bg-destructive/15 text-destructive border-destructive/30',
  muted: 'bg-muted text-muted-fg border-border',
  accent: 'bg-accent/15 text-accent border-accent/30',
  warm: 'bg-surface-warm text-accent border-accent/20',
};

export function Badge({
  children,
  variant = 'muted',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={[
        'inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full',
        'text-xs font-medium border',
        variantClasses[variant],
        className,
      ].join(' ')}
    >
      {children}
    </span>
  );
}
