declare let module:any;
import {Component,OnInit} from "@angular/core";
import {Router, ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../services/spotify.service';
import {Album} from '../../Album';

@Component({
  moduleId : module.id ,
  templateUrl : "album.component.html",
  selector :"album"
})

export class AlbumComponent  {
    private album:any;

    constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute){

    }

      ngOnInit(){
          this._route.params
          .map(params => params['id'])
          .subscribe( id => {
              this._spotifyService.getAlbum(id)
              .subscribe(album => {
                  this.album = album;
              })
          })


      }

}
