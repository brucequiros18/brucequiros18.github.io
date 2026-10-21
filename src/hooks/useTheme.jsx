import { createContext, useContext, useEffect, useState } from 'react'

const STORAGE_KEY = 'nbq-theme'
const ThemeContext = createContext({ theme: 'gold', toggleTheme: () => {} })

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'teal' ? 'teal' : 'gold'
    } catch {
      return 'gold'
    }
  })

  useEffect(() => {
    if (theme === 'teal') {
      document.documentElement.setAttribute('data-theme', 'teal')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    try {
      localStorage.setItem(STORAGE_KEY, theme)
    } catch {
      /* private mode — non-fatal */
    }
  }, [theme])

  const toggleTheme = () => setTheme((t) => (t === 'gold' ? 'teal' : 'gold'))

  return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  return useContext(ThemeContext)
}
