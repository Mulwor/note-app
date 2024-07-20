import { Select } from 'antd';
import style from './Main.module.scss';

interface SelectProps {
  filterByRegion: (region: string) => void
}

interface Option {
  value: string,
  label: string,
}

export const RegionSelect = ({ filterByRegion }: SelectProps) => {
  const options: Option[] = [
    { value: 'Africa', label: 'Chocolate' },
    { value: 'Americas', label: 'Strawberry' },
    { value: 'Asia', label: 'Vanilla' },
    { value: 'Europe', label: 'Europe' },
    { value: 'Oceania', label: 'Oceania' }
  ]

  const handleChange = (value: string) => {
    filterByRegion(value);
  };

  return (
    <Select
      defaultValue="Choose region" 
      id='select'
      className={style.select}
      onChange={handleChange}
      options={options}
    />
  );
};
