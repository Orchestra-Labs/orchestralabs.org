'use client';

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/Toast/toast';
import { useToast } from '@/hooks';

export function Toaster() {
  const { toasts } = useToast() || { toasts: [] };

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        action,
        onClick,
        ...props
      }) {
        return (
          <Toast
            key={id}
            {...props}
            onClick={onClick}
            className={`group bg-[rgba(0,0,0,0.6)] hover:bg-[rgba(0,0,0,0.8)] text-white transition-opacity duration-300 ${onClick ? 'cursor-pointer' : ''}`}
          >
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
