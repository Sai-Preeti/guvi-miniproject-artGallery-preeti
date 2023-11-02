import { EventEmitter, Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { ApiCallService } from './api-call.service';

@Injectable({
  providedIn: 'root'
})
export class UserdetailsService {
  loggedUser:string="";
  loggedIn: EventEmitter<any> = new EventEmitter();
  constructor(private router: Router) { }
  generateId():number{
    const min = 1000;
    const max = 9999;
    const id = Math.floor(Math.random() * (max - min + 1) + min);
    return id;
  }
  addUser(user:User)
  {
    console.log(user);
    let userJson = window.localStorage.getItem('user');
    console.log(userJson)
    let users:any[]=[];
    (userJson ? users=(JSON.parse(userJson)):[]);
    user.id=this.generateId();
    console.log(users)
    users.push(user)
    console.log(users)
    window.localStorage.setItem('user',JSON.stringify(users));
  }
  validateUser(user:User)
  {
    let userJson = window.localStorage.getItem('user');
    console.log(user)
    let users:any[]=[];
    (userJson ? users=(JSON.parse(userJson) ):[]);
    let index=users.findIndex((u:any)=>u.email==user.email && u.password==user.password)
    console.log(index)
    console.log(users[index])
    if(index!=-1)
      {
        this.loggedUser=users[index].name;
        this.loggedIn.emit();
        console.log("here");
        alert("Login success "+"Hi "+this.loggedUser);
        this.router.navigate(['/']);
      }
    else{
      alert("Invalid credentials")
    }
  }

}
