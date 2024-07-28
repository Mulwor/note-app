interface Flags {
  png: string;
  svg: string;
}

interface Language {
  name?: string;
}

interface Currency {
  code?: string;
  name?: string;
  symbol?: string;
}

export interface CardProps {
  capital: string;
  name: string;
  nativeName?: string;
  subregion?: string;
  population: number;
  region: string;
  flags: Flags;
  currencies: Currency[];
  languages: Language[];
  borders: string[];
  topLevelDomain: string[];
}
