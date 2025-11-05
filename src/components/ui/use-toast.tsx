"use client";

import { useState, useEffect, createContext, useContext, ReactNode } from "react";

interface Toast {
  id?: string;
  title?: string;
  description?: string;
  duration?: number;
  variant?: 'default' | 'destructive';
}

interface ToastContextValue {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, 'id'>) => string;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  return (
    <ToastContext.Provider
      value={{
        toasts,
        addToast: (toast: Omit<Toast, 'id'>) => {
          const id = Date.now().toString();
          setToasts((toasts) => [...toasts, { ...toast, id }]);
          if (toast.duration !== Infinity) {
            setTimeout(() => {
              setToasts((toasts) => toasts.filter((t) => t.id !== id));
            }, toast.duration || 5000);
          }
          return id;
        },
        removeToast: (id: string) => {
          setToasts((toasts) => toasts.filter((t) => t.id !== id));
        },
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  
  const { toasts, addToast, removeToast } = context;

  return {
    toasts,
    toast: (props: Omit<Toast, 'id'>) => {
      return addToast(props);
    },
    dismiss: (id: string) => {
      removeToast(id);
    },
  };
}
