import { useState, useEffect } from 'react';
import style from './Main.module.scss';
import IconSearch from './search.svg?react';
import { CardProps } from '../../utils/types';
import { apiURL } from '../../utils/api';
import FormInput from './FormInput';
import { RegionSelect } from './Select';

export const Main = () => {
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
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    let cancelled = true;

    if (cancelled) {
      getAllCountries();
    }

    return () => {
      cancelled = false;
    };
  }, []);

  const getCountryByName = async (countryName: string) => {
    try {
      const response = await fetch(`${apiURL}/name/${countryName}`);
      if (!response.ok) throw new Error('Что-то пошло не так');
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
      setError('');
    } catch (error) {
      setCountries([]);
      setError((error as Error).message);
    }
  };

  const filterByRegion = async (region: string) => {
    try {
      const response = await fetch(`${apiURL}/region/${region}`);
      if (!response.ok) throw new Error('Что-то пошло не так');
      const data = await response.json();
      setCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError((error as Error).message);
    }
  };

  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <FormInput     
            setError={setError}
            getAllCountries={getAllCountries}
            getCountryByName={getCountryByName}
          />

          <RegionSelect filterByRegion={filterByRegion} />
        </div>

        <div className={style.filter}>
          {isLoading && <h4>Необходимо немного подождать...</h4>}
          {error && <h4>Возможно некоторые данные не погрузились</h4>}

          {countries?.map((country) => (
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
      </div>
    </main>
  );
};
