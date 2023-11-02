import { Component, OnChanges } from '@angular/core';
import { ApiCallService } from '../shared/services/api-call.service';
import { PageEvent } from '@angular/material/paginator';
import { UserdetailsService } from '../shared/services/userdetails.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnChanges{
  arts:any=[];
  title = 'ArtInstituteOfChicago';
  noOfFav:number=0;
  constructor(public service: ApiCallService,public userService:UserdetailsService) {
  }

   ngOnChanges()
   {
    this.noOfFav=this.service.favourites.length;
   }

  ngOnInit() 
  {
    this.userService.loggedIn.subscribe(() => {
      console.log("here in user "+this.userService.loggedUser)
      const favouritesData = JSON.parse(localStorage.getItem('favourites') || '{}');
      let index=favouritesData.findIndex((o:any)=>o.name==this.userService.loggedUser)
      const userFavouritesData = favouritesData[index] || { favourites: [] };
      console.log(userFavouritesData.favourites);
      this.service.favourites = userFavouritesData.favourites;
      console.log(this.service.favourites)
      this.noOfFav = this.service.favourites.length;
    });

    this.service.getSomeData(0,10).subscribe(
      (data: any) => {
        console.log(data);
        this.arts=data.data;
        console.log(this.arts[0]);  
      },
      (er:any) => {
        console.error(er);
      }
    );
   
  }
  length = 123203;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 15,20];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;
  disabled = false;

  pageEvent: PageEvent|any;
}
