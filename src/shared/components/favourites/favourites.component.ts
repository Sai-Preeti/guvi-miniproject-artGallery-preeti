import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent{
  favourites:any[]=[];
  router: any;
  constructor(private service:ApiCallService)
  {
    this.favourites=this.service.favourites;
    console.log("favourites "+this.favourites)
  }
  viewArt(art:any)
  {
    console.log(art);
    this.router.navigate(['/art/'+art.id])
  }
  removeFromFav(id:number)
  {
     this.service.remove(id);
  }
  
}
