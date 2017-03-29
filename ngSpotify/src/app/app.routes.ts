import {ModuleWithProviders} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';
import {ArtistComponent} from './artist/artist.component';
import {AlbumComponent} from './album/album.component';

const appRoutes : Routes =[
{
    path:"",
    component:SearchComponent
},{
  path:"about",
  component:AboutComponent
},{
  path:"artist/:id",
  component: ArtistComponent
},{
  path :"album/:id",
  component: AlbumComponent
}

]
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
