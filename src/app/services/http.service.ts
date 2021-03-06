 import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
   baseurl = environment.baseUrl;

  constructor( private httpClient : HttpClient) { }

  postService(url: string, reqData: any, token: boolean = false, httpOptions: any={}) {
    return this.httpClient.post(this.baseurl+url,reqData,token && httpOptions)

 }

 getService(url:string, token: boolean = false, httpOptions:any={}){  
  
  return this.httpClient.get(this.baseurl+url,token && httpOptions)
 }


 
}


