import './Countries.module.scss';
import { Header } from './components/Header';
import { Main } from './layout/Main/Main';
import { useTheme } from './hooks/useTheme';
import { Outlet } from 'react-router-dom';

export const Countries = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <Header
        changeThemeByClick={toggleTheme}
        theme={theme}
      />
      <Main />
      <Outlet />
    </div>
  );
};
