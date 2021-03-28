const API_key = 'a993fb2adc4cfdf4377bba9ca8e5c1fd';

export const API_URL = {
  location:
    'http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=' +
    API_key,
  weather:
    'http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude=current,minutely,daily,alerts&units=metric&appid=' +
    API_key,
  air:
    'http://api.openweathermap.org/data/2.5/air_pollution/forecast?lat={lat}&lon={lon}&appid=' +
    API_key,
};
