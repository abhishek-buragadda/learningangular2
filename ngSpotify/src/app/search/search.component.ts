declare let module:any;
import {Component } from "@angular/core";
import {SpotifyService} from '../services/spotify.service';
import {Artist} from '../../Artist';
@Component({

  moduleId : module.id ,
  templateUrl: "search.component.html" ,
  selector : "search"


})
export class SearchComponent {
     searchStr:string ;
     searchResults : Artist[];
     constructor( private _spotifyService:SpotifyService ){

     }
    searchMusic(){
        this._spotifyService.searchMusic(this.searchStr).subscribe(
          res=> {
            this.searchResults = res.artists.items;
          }
        )



    }

}
