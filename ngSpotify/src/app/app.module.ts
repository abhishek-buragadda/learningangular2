import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {FormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { NavComponent } from './navigation/navigation.component';
import { SearchComponent } from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';

import {routing} from './app.routes';

@NgModule({
  imports:      [ BrowserModule,routing,FormsModule,HttpModule],
  declarations: [ AppComponent , SearchComponent , NavComponent,AboutComponent,ArtistComponent,AlbumComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
