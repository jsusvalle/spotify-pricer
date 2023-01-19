export type Country = {
  link: string;
  title: string;
  originalRel: string;
  rel: string;
  currency: string;
  originalCurrency: string;
  countryCode: string;
  internationalName: string;
  region: string;
  subRegion: string;
  demonym: string;
  originalPrice: string;
  price: number;
  catalogSize: number;
  convertedPrice: number;
  gdp: number;
  _id: string;
  __v: number;
};

export type DataByRegions = {
  [region: string]: Country[];
};

export type CountriesResponse = Country[];
