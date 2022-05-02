import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm!: FormGroup
  
  constructor( private user:UserService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', [Validators.required,Validators.pattern('[A-Za-z]*')]],
      lastName: ['', [Validators.required,Validators.pattern('[A-Za-z0-9]*')]],
      email: ['', [Validators.required, Validators.email,Validators.pattern('[[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$]*')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      service: "advance"
  });
 }

 



onSubmit(){

  
  if (this.registerForm.valid) {
     
  let reqData = {
    firstName: this.registerForm.value.firstName,
    lastName: this.registerForm.value.lastName,
    email : this.registerForm.value.email,
    password : this.registerForm.value.password,
    service:this.registerForm.value.service

  }
  
    this.user.registerService(reqData).subscribe((response : any)=>{
      console.log(response);
    
    
  })
}
}
}