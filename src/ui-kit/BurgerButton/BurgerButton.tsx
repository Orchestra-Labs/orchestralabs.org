import React from 'react';

import { cn } from '@/helpers';

type BurgerButtonProps = {
  opened: boolean;
  toggle: () => void;
};

export const BurgerButton: React.FC<BurgerButtonProps> = ({
  opened,
  toggle,
}) => (
  <button
    type="button"
    aria-label="Burger button"
    className="z-10 p-1 w-7 h-7 lg:hidden"
    onClick={toggle}
  >
    <div
      className={cn(
        'relative block w-6 h-0.5 bg-white rounded-lg transition duration-300',
        'before:absolute before:block before:w-6 before:h-0.5 before:bg-white before:rounded-lg before:-top-2 before:transition-transform before:duration-300',
        'after:absolute after:block after:w-6 after:h-0.5 after:bg-white after:rounded-lg after:-bottom-2 after:transition-transform after:duration-300',
        opened &&
          'bg-transparent transition duration-300 before:rotate-45 after:-rotate-45 before:translate-y-2 after:-translate-y-2',
      )}
    />
  </button>
);
