import { AirQuality } from 'src/app/forecast/models/air-quality.model';

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
  weather: Description[];
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
 * Open api AirQuality response interface
 */
export interface AirQualityApiDto {
  coord: Coord;
  list: AirQualityDto[];
}

/**
 * Open AirQuality response interface
 */
export interface AirQualityDto {
  dt: number;
  main: { aqi: number };
  components: Components;
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

/**
 * Open api weatherForecast model
 */
export class WeatherForecastModel {
  lat: number;
  lon: number;
  timezone: string;
  timezoneOffset: number;
  forecast: Weather[];
}

/**
 * Open api weatherForecast model
 */
export class AirQualityForecastModel {
  lat?: number;
  lon?: number;
  forecast: AirQuality[];
}

/**
 * Open api City by GPS response interface
 */
export interface CityByGPSDto extends Coord {
  name: string;
  country: string;
  local_names?: {
    ar: string;
    ascii: string;
    bg: string;
    ca: string;
    de: string;
    el: string;
    en: string;
    fa: string;
    feature_name: string;
    fi: string;
    fr: string;
    gl: string;
    he: string;
    hi: string;
    id: string;
    it: string;
    ja: string;
    la: string;
    lt: string;
    pt: string;
    ru: string;
    sr: string;
    th: string;
    tr: string;
    vi: string;
    zu: string;
  };
}
