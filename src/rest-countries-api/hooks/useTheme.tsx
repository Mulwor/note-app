import { useEffect, useState, RefObject } from 'react'

export const useTheme = (ref: RefObject<HTMLElement>) => {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (ref.current) {
      ref.current.setAttribute('data-theme', theme)
    }
  }, [theme, ref])

  return { theme, setTheme }
}
