import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpService: HttpService) { }

  registerService(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'

      })
    }

    return this.httpService.postService('/user/userSignUp', reqData, false, header);
  }

  loginUser(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'

      })
    }
    return this.httpService.postService('/user/login', reqData, false, header);
  }

  forgetpassword(reqData: any) {
    console.log(reqData);
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json'
      })
    }
    return this.httpService.postService('/user/reset', reqData, false, header);

  }

  resetPassService(reqData: any,token:any) {
    let header = {
      headers: new HttpHeaders({
        
        'Content-type': 'application/json',
        'Authorization': token

      })
    }
    return this.httpService.postService('/user/reset-password', reqData, true, header);
  }
}