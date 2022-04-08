import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup 
  constructor(private formBuilder: FormBuilder) {}

 ngOnInit() {
    this.resetForm = this.formBuilder.group({
        
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required]
    });
  }

  resetform(){
    if(this.resetForm.valid){
      console.log(this.resetForm.value);
    }else{
      return;
    }
  }
}