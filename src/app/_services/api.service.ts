import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { fetchWeatherApi } from 'openmeteo';

@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}

  async getWeather() {
    const params = {
      latitude: 55.7522,
      longitude: 37.6156,
      current: [
        'temperature_2m',
        'apparent_temperature',
        'wind_speed_10m',
        'wind_direction_10m',
      ],
    };
    const url = 'https://api.open-meteo.com/v1/forecast';

    let responses = await fetchWeatherApi(url, params);
    const response = responses[0];

    // Attributes for timezone and location
    const utcOffsetSeconds = response.utcOffsetSeconds();

    const current = response.current()!;
    // Note: The order of weather variables in the URL query and the indices below need to match!
    const weatherData = {
      current: {
        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
        temperature2m: current.variables(0)!.value(),
        apparentTemperature: current.variables(1)!.value(),
        windSpeed10m: current.variables(2)!.value(),
        windDirection10m: current.variables(3)!.value(),
      },
    };
    return weatherData;
  }
}
