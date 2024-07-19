import { useState, useEffect } from 'react';
import { apiURL } from '../utils/api';
import { CardProps } from '../utils/types';
import style from './Card.module.scss';

export const Card = () => {
  const [countries, setCountries] = useState<CardProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${apiURL}/all?fields=name,capital,flags,population,region`);
      if (!response.ok) throw new Error('Что-то пошло не так');
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    getAllCountries();
  }, [countries]);

  return (
    <div className={style.blocks}>
      {isLoading && !error && <h4>Необходимо немного подождать...</h4>}
      {error && !isLoading && <h4>Возможно некоторые данные не погрузились</h4>}

      {countries.map((country) => (
        <div
          key={country.name}
          className={style.block}
        >
          <img
            className={style.image}
            src={country.flags.png}
            alt={`${country.name} flag`}
          />

          <div className={style.countries}>
            <h2>{country.name}</h2>
            <ul className={style.information}>
              <li>
                <b>Population:</b> {country.population.toLocaleString()}
              </li>
              <li>
                <b>Region:</b> {country.region}
              </li>
              <li>
                <b>Capital:</b> {country.capital}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
