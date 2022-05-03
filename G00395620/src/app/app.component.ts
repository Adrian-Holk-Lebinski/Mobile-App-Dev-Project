import { Component } from '@angular/core';
import { NewsServiceService } from './Service/news-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  newsList:any[] = [];
  constructor(private service: NewsServiceService) {}

  ngOnInit(): void{
    this.service.GetNewsInfo().subscribe((data)=>{
      this.newsList = data.articles;
    })
  }
}
