import { useState, useEffect, useLayoutEffect } from 'react';
import style from './Main.module.scss';
import { CardProps } from '../../utils/types';
import { apiURL } from '../../utils/api';
import FormInput from '../../components/FormInput';
import { RegionSelect } from '../../components/Select';
import { CardList } from '../../components/CardList';
import { useParams } from 'react-router-dom';

export const Main = () => {
  const { name } = useParams();
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

  useLayoutEffect(() => {
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
      {!name && (
        <>
          <section className={style.blocks}>
            <FormInput
              setError={setError}
              getAllCountries={getAllCountries}
              getCountryByName={getCountryByName}
            />

            <RegionSelect filterByRegion={filterByRegion} />
          </section>

          <CardList
            countries={countries}
            isLoading={isLoading}
            error={error}
          />
        </>
      )}
    </main>
  );
};
