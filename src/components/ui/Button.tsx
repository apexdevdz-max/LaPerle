import type { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

type Variant = 'primary' | 'secondary' | 'accent' | 'ghost' | 'outline';
type Size = 'sm' | 'md' | 'lg';

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
};

type AsButton = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type AsLink = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = AsButton | AsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-primary text-on-primary hover:bg-secondary',
  secondary:
    'bg-secondary text-on-secondary hover:bg-primary',
  accent:
    'bg-accent text-on-accent hover:bg-accent-light',
  ghost:
    'bg-transparent text-primary hover:bg-muted/60',
  outline:
    'bg-transparent text-primary border-2 border-primary hover:bg-primary hover:text-on-primary',
};

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

export function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const classes = [
    'inline-flex items-center justify-center gap-2 font-medium rounded-lg',
    'cursor-pointer transition-all duration-200 ease-out',
    'focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'active:scale-[0.97]',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ].join(' ');

  if ('href' in props && props.href) {
    const { href, ...rest } = props as AsLink;
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as AsButton)}>
      {children}
    </button>
  );
}
