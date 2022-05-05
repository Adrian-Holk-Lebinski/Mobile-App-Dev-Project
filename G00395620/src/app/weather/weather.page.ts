import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Service/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherList:any[] = [];
  constructor(private service: WeatherService) { }

  ngOnInit():void{
    this.service.GetWeatherInfo().subscribe((data)=>{
        this.weatherList = data.data.webThreeDayForecast.stations
        console.log(this.weatherList);
    })
  }

}
