import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http:HttpClient) { }
  GetNewsInfo():Observable<any>{
    return this.http.get('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3a0609e4dc404969be32752c4c95e2ac');
  }
}
