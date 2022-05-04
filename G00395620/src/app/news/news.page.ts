import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../Service/news-service.service';
@Component({
  selector: 'app-news',
  templateUrl: './news.page.html',
  styleUrls: ['./news.page.scss'],
})
export class NewsPage implements OnInit {

  newsList: any[] = [];
  constructor(private service: NewsServiceService){}
  ngOnInit():void{
    this.service.GetNewsInfo().subscribe((data)=>{
      this.newsList = data.articles;
    })
  }

}
