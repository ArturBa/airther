/**
 * Open api city location interface
 */
export interface CityLocation {
  name: string;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}
