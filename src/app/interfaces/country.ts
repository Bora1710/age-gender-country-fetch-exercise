export interface Country {
  country_id: string;
  probability: number;
}

export interface CountryResponse {
  count: number;
  name: string;
  country: Country[];
}
