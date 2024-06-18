import { useState, useEffect } from "react";
import style from './Card.module.scss';

interface CardProps {
  capital: string;
  name: string;
  population: number;
  region: string;
  flags: {
    png: string;
    svg: string;
  };
}

export const Card = () => {
  const [countries, setCountries] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,capital,flags,population,region")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error('404 ошибка:', error));
  }, []);

  return (
    <div className={style.blocks}>
      {countries.length > 0 && countries.map((country) => (
        <div key={country.name} className={style.block}>
          <img src={country.flags.png} alt={`${country.name} flag`} />
          <h2>{country.name}</h2>
          <ul>
            <li>Population: {country.population}</li>
            <li>Region: {country.region}</li>
            <li>Capital: {country.capital}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};
