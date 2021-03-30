const APIkey = 'a993fb2adc4cfdf4377bba9ca8e5c1fd';

export const API_URL = {
  location:
    'http://api.openweathermap.org/geo/1.0/direct?q={city name}&limit=1&appid=' +
    APIkey,
  weather:
    'http://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}' +
    '&exclude=minutely,daily,alerts&units=metric&appid=' +
    APIkey,
  air:
    'http://api.openweathermap.org/data/2.5/air_pollution/forecast?' +
    'lat={lat}&lon={lon}&appid=' +
    APIkey,
};
