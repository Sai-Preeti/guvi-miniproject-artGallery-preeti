import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiCallService } from '../../services/api-call.service';

@Component({
  selector: 'app-viewart',
  templateUrl: './viewart.component.html',
  styleUrls: ['./viewart.component.css']
})
export class ViewartComponent implements AfterViewInit,OnInit {
  art:any;
  id:number;
  constructor(private activeRoute:ActivatedRoute,private service:ApiCallService)
  {
     this.id=parseInt(this.activeRoute.snapshot.params['id']);
  }
  ngOnInit() {
    this.service.getDataById(this.id).subscribe(
      (data: any) => {
        console.log(data);
        this.art=data.data;
        console.log(this.art);  
      },
      (er:any) => {
        console.error(er);
      }
    );
    
  }
  ngAfterViewInit() {
    document.querySelector('.artist_disp')!.innerHTML = (this.art)?.artist_display.replace('\n', '<br>'); 
    document.querySelector('.desc')!.innerHTML = (this.art)?.description; 
  }

}

