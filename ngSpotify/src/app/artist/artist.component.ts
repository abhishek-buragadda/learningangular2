declare let module:any;
import {Component,OnInit} from "@angular/core";
import {Router, ActivatedRoute } from '@angular/router';
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../../Artist';
import {Album} from '../../Album';

@Component({
  moduleId : module.id ,
  templateUrl : "artist.component.html",
  selector :"about"
})

export class ArtistComponent  {
    private artist:Artist[];
    private albums:Album[];

    constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute){

    }

      ngOnInit(){
          this._route.params
          .map(params => params['id'])
          .subscribe( id => {
              this._spotifyService.getArtist(id)
              .subscribe(artist => {
                this.artist = artist;
              });
              this._spotifyService.getAlbums(id)
              .subscribe(albums => {
                  this.albums = albums.items;
              })
          })


      }

}
