import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm!: FormGroup;
  token: any

  constructor(private formBuilder: FormBuilder, private user: UserService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.resetForm = this.formBuilder.group({

      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
    this.token = this.activeRoute.snapshot.paramMap.get('token')

  }



  onSubmit() {
    if (this.resetForm.valid) {


      let reqData = {

        newPassword: this.resetForm.value.password

      }

      this.user.resetPassService(reqData, this.token).subscribe((response: any) => {
        console.log(response);
      })



    }

  }

}
