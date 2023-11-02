import { Component, OnInit,ViewEncapsulation  } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { ApiCallService } from '../../services/api-call.service';
import {Router} from "@angular/router"
import { MatSnackBar } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { FormControl, FormGroup } from '@angular/forms';
import {MatDialogModule,MatDialog} from '@angular/material/dialog';
import { SharedialogComponent } from '../sharedialog/sharedialog.component';
import { UserdetailsService } from '../../services/userdetails.service';


@Component({
  selector: 'app-artworks',
  templateUrl: './artworks.component.html',
  styleUrls: ['./artworks.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ArtworksComponent implements OnInit {
  arts:any=[];
  searchFrom:FormGroup | any;
  title = 'ArtInstituteOfChicago';
  constructor(public service: ApiCallService,
    private router: Router,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    private userService:UserdetailsService) { 
      this.searchFrom=new FormGroup({
        search:new FormControl('')
      })
      
    }
  ngOnInit() {
    this.searchFrom.valueChanges.subscribe((value:any) => {
      console.log("query= ",value)
      if(value=="")
      {
        this.service.getSomeData(this.pageIndex,this.pageSize).subscribe(
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
      else
      {
        this.service.getSearchData(this.searchFrom.value.search,this.pageIndex,this.pageSize).subscribe(
          (data: any) => {
            console.log(data);
            this.arts=data.data;
            console.log(this.arts);  
          },
          (er:any) => {
            console.error(er);
          }
        );
      }
    })
    this.service.getSomeData(this.pageIndex,this.pageSize).subscribe(
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

  handlePageEvent(e: PageEvent) {
    console.log(e)
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex+1;
    const query=this.searchFrom.get('search').value;
    console.log(query);
    if(query=="")
    {
      this.service.getSomeData(this.pageIndex,this.pageSize).subscribe(
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
    else
    {
      this.service.getSearchData(this.searchFrom.value.search,this.pageIndex,this.pageSize).subscribe(
        (data: any) => {
          console.log(data);
          this.arts=data.data;
          console.log(this.arts);  
        },
        (er:any) => {
          console.error(er);
        }
      );
    }
  }
  viewArt(art:any)
  {
    console.log(art);
    this.router.navigate(['/art/'+art.id])
  }
  addToFav(art:any)
  {
    console.log(this.service.checkInFav(art.id));
    if(this.service.checkInFav(art.id)==false)
    {
      if(this.userService.loggedUser=='')
      {
        alert("Please login to save your favourites")
      }
      else
      {
        this.service.addToFav(art);
        this.openSnackBar();
      }
    }
    else
    {
      console.log("here to remove")
      this.service.remove(art.id);
    }
  
    
  }
  openSnackBar() {
    this._snackBar.openFromComponent(SnackbarComponent, {
      duration: 2000,
    });
  }
  openDialog(id:number) 
      {
        // this.dialog.open(SharedialogComponent, {
        //   width: '700px',
        //   height:'500px',
        //   data: { }
        // });
        if(navigator.share){
          navigator.share({
            title:"Art",
            text:"Check this art",
            url:`${window.location.origin}/art/${id}`
          })
        }
      }

}
