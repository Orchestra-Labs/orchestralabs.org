import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';

import { cn } from '@/helpers/utils';

type ButtonConfig = {
  variant: {
    [key: string]: string | string[];
  };
  size: {
    [key: string]: string | string[];
  };
};

const buttonVariants = cva<ButtonConfig>(
  'inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm',
  {
    variants: {
      variant: {
        default: [
          'text-black bg-blue',
          'hover:bg-blue-hover hover:text-blue-dark',
          'active:bg-blue-pressed active:text-black',
          'disabled:bg-neutral-3 disabled:text-neutral-1',
        ],
        transparent: [
          'bg-transparent text-blue min-h-12',
          'hover:text-blue-dark',
        ],
        secondary: [
          'text-blue border bg-transparent',
          'hover:bg-blue-hover-secondary hover:text-blue-dark hover:border-blue-darker',
          'active:bg-blue-pressed-secondary active:text-blue active:border-blue',
          'disabled:border-neutral-3 disabled:text-neutral-3 disabled:bg-transparent',
        ],
        icon: ['rounded-full bg-neutral-2 text-white', ''],
        link: ['text-blue text-sm hover:text-blue-dark bg-transparent'],
      },
      size: {
        default: 'h-11 p-2.5',
        small: 'h-6 p-0 min-h-6',
        'rounded-default': 'max-w-8 max-h-8 w-8 h-8',
        xsmall: 'h-[18px] p-0',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';

export { Button, buttonVariants };
