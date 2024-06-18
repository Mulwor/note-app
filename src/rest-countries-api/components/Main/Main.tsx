import { ChangeEvent, useState } from 'react';
import style from './Main.module.scss';
import { Card } from '../Card';
import IconSearch  from './search.svg?react';

export const Main = () => {
  const [searchField, setSearchField] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);
  };

  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <label>
            <IconSearch />
            <input 
              type="search"
              placeholder='Search country'
              onChange={handleChange}
            />
          </label>

          <div>Container</div>
        </div>

        <Card />
      </div>
    </main>
  )
}
