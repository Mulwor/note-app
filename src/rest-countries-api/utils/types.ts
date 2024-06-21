interface Flags {
  png: string;
  svg: string;
}

export interface CardProps {
  capital: string;
  name: string;
  population: number;
  region: string;
  flags: Flags;
}