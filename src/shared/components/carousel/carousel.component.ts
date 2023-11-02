import { Component } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  arts:any=[];
  constructor(private service: ApiCallService,
    private router: Router) {
    setInterval(():void=>{
      this.no=(this.no+1)%5;
    },5000);
   }
  ngOnInit() {
    this.service.getSomeData(25,5).subscribe(
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

  viewArt(art:any)
  {
    console.log(art);
    this.router.navigate(['/art/'+art.id])
  }
  no:number=0;
  nextImage():void
  {
    this.no=(this.no+1)%5;
  }
 numbers=[0,1,2,3,4]

  prevImage():void
  {
    if(this.no==0)
    this.no=4;
  else
  this.no=this.no-1;
  }

  getImage(idx:number):void
  {
    this.no=idx;
  }
  
}
