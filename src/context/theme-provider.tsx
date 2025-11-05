"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

const ThemeProviderContext = createContext({})

export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
    const [mounted, setMounted] = useState(false)

    // Ensure rendering happens client-side to avoid hydration mismatch
    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return <>{children}</>
    }

    // Theme is now permanently set to dark mode via forcedTheme prop in layout.tsx
    // The NextThemesProvider will enforce dark mode and ignore user preferences
    return (
        <NextThemesProvider {...props}>
            {children}
        </NextThemesProvider>
    )
}