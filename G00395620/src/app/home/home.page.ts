import { Component } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  day = new Date();
  time = this.day.getHours() + ':' + this.day.getMinutes() + ":" + this.day.getSeconds();
  date:string = this.day.getDay() + '/' + this.day.getMonth() + '/' + this.day.getFullYear();
  constructor() {
    this.startTime()
  } 
  startTime() {
    var intervalVar = setInterval(function () {
      let day = new Date();
      let time = day.getHours() + ':' + day.getMinutes() + ":" + day.getSeconds();

      this.day = day;
      this.time = time;
    }.bind(this), 500)
  }
}
