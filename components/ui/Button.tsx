import React from 'react';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  loading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      fullWidth = false,
      loading = false,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const variants = {
      primary:
        'bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md',
      secondary:
        'bg-secondary-600 text-white hover:bg-secondary-700 active:bg-secondary-800 shadow-sm hover:shadow-md',
      outline:
        'border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100',
      ghost: 'text-primary-600 hover:bg-primary-50 active:bg-primary-100',
      danger:
        'bg-danger-main text-white hover:bg-danger-dark active:bg-red-700 shadow-sm hover:shadow-md',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2.5 text-sm',
      lg: 'px-6 py-3 text-base',
    };

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        className={cn(
          'btn-base',
          variants[variant],
          sizes[size],
          fullWidth && 'w-full',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {loading ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="h-4 w-4 animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
