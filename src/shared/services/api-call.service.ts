import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Injectable, OnChanges, OnInit } from '@angular/core';
import { UserdetailsService } from './userdetails.service';
import { User } from '../models/user.model';
import { UserData } from '../models/user-data.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService implements OnChanges {
  favourites:any[]=[];
  constructor(private http:HttpClient,
    private userService:UserdetailsService) { 
      this.favourites = this.getFavouritesFromStorage(userService.loggedUser);

  } 
 ngOnChanges(){}
  // updateFav()
  // {
  //   let favJson = window.localStorage.getItem('favourites');
  //   let favouritesArr: any[] = [];
  //    console.log(this.favourites)
  //   favJson ? favouritesArr.push(...JSON.parse(favJson)) : '';
  //   let idx = favouritesArr.findIndex((o: any) => o.name == this.userService.loggedUser);
  //   if(idx != -1) {
  //     this.favourites = favouritesArr[idx]['favourites'];
  //     console.log(this.favourites);
  //   }
  // }
  getFavouritesFromStorage(user: string): any[] {
    let favouritesJson = window.localStorage.getItem('favourites');
    if (favouritesJson) {
      let favouritesArr = JSON.parse(favouritesJson);
      let idx = favouritesArr.findIndex((o: any) => o.name == user);
      if (idx != -1) {
        return favouritesArr[idx].favourites;
      }
    }
    return [];
  }
    addToFav(art : User){
      const index = this.favourites.findIndex(favArt => favArt.id === art.id);
      if (index === -1) {
        this.favourites.push(art);
        let favJson = window.localStorage.getItem('favourites');
        let favouritesArr: UserData[] = favJson ? JSON.parse(favJson) : [];
        let index = favouritesArr.findIndex(obj => obj.name === this.userService.loggedUser);
        if (index !== -1) {
          // User object already exists, update their favourites
          favouritesArr[index].favourites = this.favourites;
        } else {
          // User object doesn't exist, add it with their favourites
          let newUser: UserData = {
            name: this.userService.loggedUser,
            favourites: this.favourites
          };
          favouritesArr.push(newUser);
        }
        window.localStorage.setItem('favourites', JSON.stringify(favouritesArr));
      }
  }
   
    checkInFav(id:number)
  {
    if(this.favourites.findIndex((art:any)=>art.id===id)!=-1)
    {
      return true;
    }
    else
    return false;
     }
    getSomeData(pageIndex:number,limit:number): any {
      console.log("in normal api")
      return this.http.get(
        "https://api.artic.edu/api/v1/artworks?page="+pageIndex.toString()+"&limit="+limit.toString()
      );
    }
    getDataById(id:number):any{
      return this.http.get(
        "https://api.artic.edu/api/v1/artworks/"+id.toString()
      );
    }

    getSearchData(query:string,pageIndex:number,limit:number):any{
      console.log("insearch api")
      console.log( "https://api.artic.edu/api/v1/artworks/search?fields=image_id,title,artist_title&q="+query+"?page="+ pageIndex.toString()+"&limit="+limit.toString())
      return this.http.get(
        "https://api.artic.edu/api/v1/artworks/search?fields=image_id,title,artist_title&q="+query+"&page="+ pageIndex.toString()+"&limit="+limit.toString()
      );
    }

    remove(id:number):void{
      let index = this.favourites.findIndex(art => art.id === id);
      this.favourites.splice(index, 1);
      
      let favJson = window.localStorage.getItem('favourites');
      let favouritesArr: any[] = [];
      
      favJson ? favouritesArr.push(...JSON.parse(favJson)) : '';
      
      let idx = favouritesArr.findIndex((o: any) => o.name == this.userService.loggedUser);
      
      if (favouritesArr[idx]) {
         console.log(favouritesArr[idx]['favourites'])
          index = favouritesArr[idx]['favourites'].findIndex((art: any) => art.id === id);
          favouritesArr[idx]['favourites'].splice(index, 1);
      }
      
      console.log("fav " + favouritesArr[idx]);
      
      window.localStorage.setItem('favourites', JSON.stringify(favouritesArr));

    }
   
}
