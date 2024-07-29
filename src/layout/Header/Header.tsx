import React from 'react';
import IconSun from '../../assets/sun.svg?react';
import IconMoon from '../../assets/moon.svg?react';
import style from './Header.module.scss';
import { Link } from 'react-router-dom';

interface HeaderProps {
  changeThemeByClick: () => void;
  theme: string;
}

export const Header = ({ changeThemeByClick, theme }: HeaderProps) => {
  return (
    <header className={style.header}>
      <div className={style.wrapper}>
        <div className={style.block}>
          <h1 className={style.title}>
            <Link to='/country'>Where is the world?</Link>
          </h1>

          <div
            className={style.theme}
            onClick={changeThemeByClick}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
            <p>{theme} mode</p>
          </div>
        </div>
      </div>
    </header>
  );
};
