import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicService {

  constructor(private http:HttpClient) { }
  GetMusicInfo():Observable<any>{
    return this.http.get('https://jsonblob.com/api/972104554586062848')
  }
}
