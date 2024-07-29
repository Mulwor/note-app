import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import style from './FormInput.module.scss'
import { Input } from 'antd'

interface FormInputProps {
  setError: Dispatch<SetStateAction<string>>
  getCountryByName: (countryName: string) => void
  getAllCountries: () => void
}

const FormInput = ({
  setError,
  getCountryByName,
  getAllCountries
}: FormInputProps) => {
  const [searchField, setSearchField] = useState('')

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchField(e.target.value)

    if (e.target.value === '') {
      setError('')
      getAllCountries()
    }
  }

  const handleSearchSubmit = () => {
    if (searchField.trim()) {
      getCountryByName(searchField)
    }
  }

  const submitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (searchField.trim()) {
      getCountryByName(searchField)
    }
  }

  return (
    <form onSubmit={submitHandler}>
      <Input.Search
        placeholder="Search country"
        onChange={handleSearchChange}
        onSearch={handleSearchSubmit}
        className={style.search}
      />
    </form>
  )
}

export default FormInput
