import { environment } from '../../../environments/environment';

/**
 * OpenWeatherAPIs
 */
export const API_URL = {
  location:
    'https://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=' +
    environment.weatherapi.apiKey,
  weather:
    'https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}' +
    '&exclude=minutely,daily,alerts&units=metric&appid=' +
    environment.weatherapi.apiKey,
  air_current:
    'https://api.openweathermap.org/data/2.5/air_pollution?' +
    'lat={lat}&lon={lon}&appid=' +
    environment.weatherapi.apiKey,
  air_forecast:
    'https://api.openweathermap.org/data/2.5/air_pollution/forecast?' +
    'lat={lat}&lon={lon}&appid=' +
    environment.weatherapi.apiKey,
};
