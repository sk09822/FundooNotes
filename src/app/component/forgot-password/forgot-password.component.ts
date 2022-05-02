import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotForm!: FormGroup;
  token :any;

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
      service: "advance"
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token')
    

  }

  onSubmit() {
    if (this.forgotForm.valid) {
     

      let reqData = {
        email: this.forgotForm.value.email,
        service: this.forgotForm.value.service

      }
      this.user.forgetpassword(reqData).subscribe((response: any) => {

        console.log(response);
      })

    }


  }
}
