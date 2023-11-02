import { Component } from '@angular/core';
import { UserdetailsService } from '../../services/userdetails.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  data:FormGroup;
      constructor(private userService:UserdetailsService,private fb: FormBuilder,
        private router: Router)
      {
        this.data=fb.group({
          name:['',
            [Validators.required]
          ],
          email:['',
            [Validators.required,
            Validators.email]
          ],
          password:['',
            [Validators.required,
            Validators.minLength(8)]
          ]
      })
    }
    addUser()
    {}
    onSubmit()
    {
      if (this.data.valid) {
        const formData = this.data.value;
        this.addUser()
        {
          this.userService.addUser(this.data.value);
          this.router.navigate(['/login']);
        }
        this.data.reset();
      }
    }
}
