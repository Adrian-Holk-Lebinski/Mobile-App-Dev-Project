import { Component } from '@angular/core';
import { NewsServiceService } from '../Service/news-service.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
newsList: any[] = [];
constructor(private service: NewsServiceService){}
ngOnInit():void{
  this.service.GetNewsInfo().subscribe((data)=>{
    this.newsList = data.articles;
  })
}

}
