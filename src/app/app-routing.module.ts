import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArtworksComponent } from '../shared/components/artworks/artworks.component';
import { HomeComponent } from '../shared/components/home/home.component';
import { ViewartComponent } from '../shared/components/viewart/viewart.component';
import { FavouritesComponent } from '../shared/components/favourites/favourites.component';
import { AboutComponent } from '../shared/components/about/about.component';
import { DocumentComponent } from '../shared/components/document/document.component';
import { LoginComponent } from '../shared/components/login/login.component';
import { SignupComponent } from '../shared/components/signup/signup.component';

const routes: Routes = [
  {
    path:'gallery',
    component:ArtworksComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:SignupComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'art/:id',
    component:ViewartComponent
  },
  {
    path:'favourites',
    component:FavouritesComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'document',
    component:DocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
