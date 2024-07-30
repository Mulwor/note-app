export const apiURL = 'https://restcountries.com/v2';

export const ALL_COUNTRIES = apiURL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name: string) => apiURL + 'name/' + name;

export const filterByCode = (codes: string[]) => apiURL + 'alpha?codes=' + codes.join(',');