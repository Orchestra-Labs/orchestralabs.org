import { cva, type VariantProps } from 'class-variance-authority';
import { ClassValue } from 'clsx';
import * as React from 'react';

import { cn } from '@/helpers/utils';

type BadgeConfig = {
  variant: {
    [key: string]: string | string[];
  };
  type: {
    [key: string]: string | string[];
  };
};

const badgeVariants = cva<BadgeConfig>(
  'inline-flex items-center rounded-lg border px-2.5 py-1.5 px-3 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive:
          'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
        outline: 'text-foreground',
      },
      type: {
        default: 'bg-transparent border-neutral-2 text-white',
        success: 'bg-success-dark text-success border-success',
        warning: 'bg-warning-dark text-warning border-warning',
        error: 'bg-error-dark text-error border-error',
      },
    },
    defaultVariants: {
      variant: 'default',
      type: 'default',
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, type, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, type }), className as ClassValue)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
