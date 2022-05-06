import { Component, OnInit } from '@angular/core';
import { MusicService } from '../Service/music.service';
@Component({
  selector: 'app-music',
  templateUrl: './music.page.html',
  styleUrls: ['./music.page.scss'],
})
export class MusicPage implements OnInit {

  constructor(private service:MusicService) { }
musicList:any[] = [];
  ngOnInit():void{
    this.service.GetMusicInfo().subscribe((data)=>{
    this.musicList = data.items
      })}

}
