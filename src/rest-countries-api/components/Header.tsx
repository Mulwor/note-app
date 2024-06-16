import iconSun from '../assets/sun.svg';
import iconMoon from '../assets/moon.svg';
import style from './Header.module.scss';

interface HeaderProps {
  changeThemeByClick: () => void;
  theme: string;
}

export const Header = ({ changeThemeByClick, theme }: HeaderProps) => {
  console.log(theme)

  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <h1 className={style.title}>Where is the world?</h1>

          <div className={style.theme} onClick={changeThemeByClick}>
            {theme === 'dark' ? <img src={iconMoon} alt="sun" /> : <img src={iconSun} alt="sun" />}
            <p>{theme} mode</p>
          </div>
          </div>
        </div>
    </header>
  )
}