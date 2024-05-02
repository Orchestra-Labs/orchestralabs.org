import { ClassValue } from 'clsx';
import * as React from 'react';
import { ReactNode } from 'react';

import { cn } from '@/helpers/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'unstyled';
  label?: string;
  error?: boolean;
  errorText?: string;
  icon?: ReactNode;
  wrapperClass?: string;
  iconRole?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant,
      className,
      type,
      label,
      error,
      errorText,
      icon,
      wrapperClass,
      iconRole,
      ...props
    },
    ref,
  ) => {
    switch (variant) {
      case 'primary': {
        return (
          <div className={cn('text-left relative', wrapperClass as string)}>
            {label && (
              <label className="block mb-1.5 text-xs text-white/80">
                {label}
              </label>
            )}
            <div className="relative">
              <input
                type={type}
                className={cn(
                  'flex h-10 w-full rounded-lg border border-neutral-3 bg-transparent px-2 py-1.5 text-base text-neutral-3',
                  'hover:border-neutral-1 hover:text-neutral-1',
                  'focus:outline-0 focus:border-blue focus:text-white',
                  'placeholder:text-xs placeholder:text-neutral-3',
                  !!error &&
                    'border-error text-error hover:border-error hover:text-error focus:border-error focus:text-error',
                  !!icon && 'pr-11.5',
                  className as ClassValue,
                )}
                ref={ref}
                {...props}
              />
              {icon && (
                <div
                  role={iconRole}
                  className={cn(
                    `absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 flex items-center justify-center`,
                    'text-neutral-3 hover:text-neutral-1 focus:text-white',
                    !!error && 'text-error hover:text-error focus:text-error',
                  )}
                >
                  {icon}
                </div>
              )}
            </div>
            {errorText && (
              <span className="mt-1.5 text-sm text-error">{errorText}</span>
            )}
          </div>
        );
      }
      default: {
        return (
          <input
            className={cn('bg-transparent', className as string)}
            ref={ref}
            {...props}
          />
        );
      }
    }
  },
);
Input.displayName = 'Input';
