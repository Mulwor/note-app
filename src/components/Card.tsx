import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { apiURL } from '../utils/api'
import { CardProps } from '../utils/types'
import style from './Card.module.scss'
import IconLeft from '../assets/arrow-left.svg?react'

export const Card = () => {
  const [country, setCountry] = useState<CardProps | null>(null)
  const { name } = useParams()

  const getCountryByName = async () => {
    try {
      const res = await fetch(`${apiURL}/name/${name}`)
      if (!res.ok) throw new Error('Could not found!')
      const data = await res.json()
      setCountry(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCountryByName()
  }, [name])

  return (
    <>
      <div className={style.link}>
        <Link to="/" className={style.button}>
          <IconLeft /> <span>Back</span>
        </Link>
      </div>

      <div className="country__info__wrapper">
        {country ? (
          <div className={style.card}>
            <div className={style.wrapper}>
              <div className={style.wrapperImg}>
                <img
                  className={style.image}
                  src={country.flags.svg}
                  alt={`${country.name} flag`}
                />
              </div>

              <div className={style.information}>
                <h1 className={style.title}>{country.name}</h1>

                <div className={style.additional}>
                  <div className={style.blocks}>
                    <div className={style.item}>
                      Native Name: {country.nativeName}
                    </div>
                    <div className={style.item}>
                      Population: {country.population}
                    </div>
                    <div className={style.item}>Region: {country.region}</div>
                    <div className={style.item}>
                      Sub Region: {country.subregion}
                    </div>
                    <div className={style.item}>Capital: {country.capital}</div>
                  </div>

                  <div>
                    <div className={style.item}>
                      Top-level-domain:{' '}
                      {country.topLevelDomain
                        .map((country) => country)
                        .join(', ')}
                    </div>
                    <div className={style.item}>
                      Currencies:{' '}
                      {country.currencies
                        .map((country) => country.name)
                        .join(', ')}
                    </div>
                    <div className={style.item}>
                      Languages:{' '}
                      {country.languages
                        .map((country) => country.name)
                        .join(', ')}
                    </div>
                  </div>
                </div>

                <div className={style.border}>
                  Border countries:
                  {country.borders
                    ? country.borders.map((border) => (
                        <span key={border} className={style.borderCountry}>
                         <Link key={country.name} to={country.name}>
                           {border}
                         </Link>
                        </span>
                      ))
                    : 'none'}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}
