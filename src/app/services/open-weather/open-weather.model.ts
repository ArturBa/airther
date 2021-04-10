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

/**
 * Open api full weather interface
 */

export interface FullWeather {
  lat: number;
  lon: number;
  timezone: string;
  timezone_offset: number;
  current: Weather;
  hourly: Weather[];
}

/**
 * Open api Weather interface
 */
export interface Weather {
  dt: number;
  temp: number;
  feels_like: number;
  pressure: number;
  humidity: number;
  dew_point: number;
  uvi: number;
  clouds: number;
  visibility: number;
  wind_speed: number;
  wind_gust?: number;
  wind_deg: number;
  weather: Description;
  pop?: number;
  rain?: Rain;
  snow?: Snow;
}

/**
 * Open api Description interface
 */
export interface Description {
  id: number;
  main: string;
  description: string;
  icon: string;
}

/**
 * Open api Rain interface
 */
export interface Rain {
  '1h': number;
}

/**
 * Open api Snow interface
 */
export interface Snow {
  '1h': number;
}

/**
 * Open api FullAir interface
 */
export interface FullAir {
  coord: Coord;
  list: AirQuality[];
}

/**
 * Open api AirQuality interface
 */
export interface AirQuality {
  main: AQI;
  components: Components;
  dt: number;
}

/**
 * Open api coord interface
 */
export interface Coord {
  lon: number;
  lat: number;
}

/**
 * Open api AQI interface
 */
export interface AQI {
  aqi: number;
}
/**
 * Open api components interface
 */
export interface Components {
  co: number;
  no: number;
  no2: number;
  o3: number;
  so2: number;
  pm2_5: number;
  pm10: number;
  nh3: number;
}
