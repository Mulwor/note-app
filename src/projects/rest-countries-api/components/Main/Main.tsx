import { ChangeEvent, useState, useEffect } from 'react';
import style from './Main.module.scss';
import IconSearch from './search.svg?react';
import { CardProps } from '../../utils/types';
import { apiURL } from '../../utils/api';

export const Main = () => {
  const [searchField, setSearchField] = useState('');
  const [allCountries, setAllCountries] = useState([]);
  const [filterCountryBySearch, setFilterCountryBySearch] = useState<CardProps[]>(allCountries);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const getAllCountries = async () => {
    try {
      const response = await fetch(`${apiURL}/all?fields=name,capital,flags,population,region`);
      if (!response.ok) throw new Error('Что-то пошло не так');
      const data = await response.json();
      setAllCountries(data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError((error as Error).message);
    }
  };

  useEffect(() => {
    let mounted = true;
    
    if (mounted) {
      getAllCountries();
    }
  
    return () => {
      mounted = false; 
    };
  }, []);

  const getCountryByName = async (countryName: string) => {
    try {
      const response = await fetch(`${apiURL}/name/${countryName}`);
      if (!response.ok) throw new Error('Что-то пошло не так');
      const data = await response.json();
      setFilterCountryBySearch(data);
      setIsLoading(false);
      setError(""); 
    } catch (error) {
      setFilterCountryBySearch([])
      setError((error as Error).message);
    }
  };

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchField.trim()) {
      getCountryByName(searchField);
    }
  };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value);

    if (e.target.value === "") {
      setError(""); 
      setFilterCountryBySearch(allCountries);
    }
  };

  return (
    <main className={style.main}>
      <div className={style.wrapper}>
        <div className={style.blocks}>
          <label>
            <IconSearch />

            <form onSubmit={submitHandler}>
              <input
                type='search'
                placeholder='Search country'
                value={searchField}
                onChange={handleSearchChange}
              />
            </form>
          </label>

          <div>Container</div>
        </div>

        <div className={style.arrraa}>
          {isLoading && <h4>Необходимо немного подождать...</h4>}
          {error && <h4>Возможно некоторые данные не погрузились</h4>}

          {filterCountryBySearch?.map((country) => (
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
