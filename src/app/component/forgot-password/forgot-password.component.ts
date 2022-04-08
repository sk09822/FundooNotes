    import { Component, OnInit } from '@angular/core';
     import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  forgotpassword!: FormGroup
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.forgotpassword = this.formBuilder.group({

      email: ['', [Validators.required, Validators.email]],
 });
 }

 forgotpassform() {
  if (this.forgotpassword.valid) {
    console.log(this.forgotpassword.value);
  } else {
    return;
  }
}
}
