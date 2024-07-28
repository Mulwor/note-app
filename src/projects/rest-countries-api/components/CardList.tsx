import { Link } from 'react-router-dom';
import { CardProps } from '../utils/types';
import style from './CardList.module.scss';

interface CardListProps {
  countries: CardProps[];
  isLoading: boolean;
  error: string;
}

export const CardList = ({ countries, isLoading, error }: CardListProps) => {
  return (
    <section className={style.filter}>
      {isLoading && <h4>Необходимо немного подождать...</h4>}
      {error && <h4>Возможно некоторые данные не погрузились</h4>}

      {countries?.map((country) => (
        <div
          key={country.name}
          className={style.block}
        >
          <Link
            key={country.name}
            to={`/country/${country.name}`}
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
          </Link>
        </div>
      ))}
    </section>
  );
};
