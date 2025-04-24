
"use client";
import React, { createContext, useContext } from 'react'

type Theme = {
    colors: {
        primary: string,
        secondary: string
    }
}

const defaultTheme: Theme = {
    colors: {
        primary: '#FFFFFF',
        secondary: '#000000'
    }
}

const themeContext = createContext<Theme>(defaultTheme);

export default function ThemeProvider({ children }: {
    children: React.ReactNode
}) {
    return (
        <themeContext.Provider value={defaultTheme}>
            {children}
        </themeContext.Provider>
    )
}

export const useTheme = () => useContext(themeContext)
