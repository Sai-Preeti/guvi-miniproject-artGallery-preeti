import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserdetailsService } from '../../services/userdetails.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    loginData:FormGroup;
      constructor(private userService:UserdetailsService)
      {
        this.loginData=new FormGroup({
          email:new FormControl(''),
          password:new FormControl('')
      })
    }
    validateUser()
    {
      this.userService.validateUser(this.loginData.value);
    }
}


