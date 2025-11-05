"use client"

import React, { useState, createContext, useContext } from 'react'
import { X } from 'lucide-react'

// Create context for toasts
const ToastContext = createContext<any>({})

// Toast provider component
export function ToastProvider({ children }: { children: React.ReactNode }) {
    const [toasts, setToasts] = useState<any[]>([])

    const addToast = (toast: any) => {
        const id = Date.now().toString()
        setToasts((current) => [...current, { ...toast, id }])

        if (toast.duration !== Infinity) {
            setTimeout(() => {
                setToasts((current) => current.filter((t) => t.id !== id))
            }, toast.duration || 5000)
        }

        return id
    }

    const removeToast = (id: string) => {
        setToasts((current) => current.filter((t) => t.id !== id))
    }

    return (
        <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
            {children}

            {/* Toast container */}
            <div className="fixed top-0 z-50 flex flex-col-reverse items-end gap-2 p-4 max-w-md w-full right-0 sm:bottom-0 sm:top-auto">
                {toasts.map(({ id, title, description, variant = 'default', ...props }) => (
                    <div
                        key={id}
                        className={`relative flex w-full items-center justify-between rounded-md border p-4 pr-8 shadow-lg ${variant === 'destructive' ? 'bg-red-600 text-white' : 'bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100'
                            }`}
                        {...props}
                    >
                        <div className="grid gap-1">
                            {title && <p className="text-sm font-semibold">{title}</p>}
                            {description && <p className="text-sm opacity-90">{description}</p>}
                        </div>
                        <button
                            onClick={() => removeToast(id)}
                            className="absolute right-2 top-2 rounded-md p-1 text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                            <X className="h-4 w-4" />
                        </button>
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

// Hook to use toast
export function useToast() {
    const context = useContext(ToastContext)

    if (context === undefined) {
        throw new Error('useToast must be used within a ToastProvider')
    }

    return {
        toast: (props: any) => context.addToast(props),
        dismiss: (id: string) => context.removeToast(id),
    }
}

// Export a Toaster component for simpler usage
export function Toaster() {
    return null // The actual toast UI is rendered by the provider
}