import { useRef } from 'react'
import './Countries.module.scss'
import { Header } from "./components/Header/Header"
import { Main } from './components/Main/Main'
import { useTheme } from './hooks/useTheme'

export const Countries = () => {
  const divRef = useRef(null)
  const { theme, setTheme } = useTheme(divRef)

  const changeThemeByClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div ref={divRef}>
      <Header changeThemeByClick={changeThemeByClick} theme={theme}/>
      <Main /> 
    </div>
  )
}