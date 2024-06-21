import './Countries.module.scss'
import { Header } from "./components/Header/Header"
import { Main } from './components/Main/Main'
import { useTheme } from './hooks/useTheme'

export const Countries = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <div>
      <Header changeThemeByClick={toggleTheme} theme={theme}/>
      <Main /> 
    </div>
  )
}