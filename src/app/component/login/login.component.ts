import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup
  user='1';

  constructor(private users: UserService, private formBuilder: FormBuilder,private router:Router ) { }


  ngOnInit() {
localStorage.setItem('SeesionUser',this.user);



    this.loginForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email, Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      // service: "advance"
    });
  }

  onSubmit() {


    if (this.loginForm.valid) {

      let reqData = {

        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
       

      }
      this.users.loginUser(reqData).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.id)
        this.router.navigateByUrl('/dashboard')
      })
    }
  }
}