import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) { }
  GetWeatherInfo():Observable<any>{
    return this.http.get('https://weather.apis.ie/weather/api?query=%7B%0A%20%20webThreeDayForecast%20%7B%0A%20%20%20%20stations%20%7B%0A%20%20%20%20%20%20location%0A%20%20%20%20%20%20days%20%7B%0A%20%20%20%20%20%20%20%20date%0A%20%20%20%20%20%20%20%20min_temp%0A%20%20%20%20%20%20%20%20max_temp%0A%20%20%20%20%20%20%20%20weather%0A%20%20%20%20%20%20%20%20weather_text%0A%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D');
  }
}
