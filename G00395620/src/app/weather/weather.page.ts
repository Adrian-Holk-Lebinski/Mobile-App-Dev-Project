import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../Service/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage implements OnInit {
  weatherList:any[] = [];
  galway:any[] = [];
  constructor(private service: WeatherService) { }

  ngOnInit():void{
    this.service.GetWeatherInfo().subscribe((data)=>{
      data.data.webThreeDayForecast.stations.forEach(element => {
        if(element.location == "Galway"){
          console.log(element.location);
          this.galway = element.days
        }
      });

      let day = new Date();

      this.galway[0].date = day.getDate() + '/' + day.getMonth() + '/' + day.getFullYear() 
      this.galway[1].date = (day.getDate() + 1) + '/' + day.getMonth() + '/' + day.getFullYear()
      this.galway[2].date = (day.getDate() + 2) + '/' + day.getMonth() + '/' + day.getFullYear()

      this.galway[0].weather_text = this.galway[0].weather_text.toLowerCase().replaceAll("_", " ")
      this.galway[1].weather_text = this.galway[1].weather_text.toLowerCase().replaceAll("_", " ")
      this.galway[2].weather_text = this.galway[2].weather_text.toLowerCase().replaceAll("_", " ")

    })
  }

}
