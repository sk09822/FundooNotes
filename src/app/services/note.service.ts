import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;

  constructor(private httpService: HttpService) {


  }


  takeNoteService(reqData: any) {
    this.token = localStorage.getItem('token');
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token

      })
    }
    return this.httpService.postService('/notes/addNotes', reqData, true, header)


  }
  getNoteList() {
    this.token = localStorage.getItem('token')
    console.log("inside getnote service");
    let headers = {
      headers: new HttpHeaders({

        'Content-type': 'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.getService('/notes/getNotesList', true, headers)


  }



  updatenoteservice(reqData: any) {
    this.token = localStorage.getItem('token')
    console.log("inside updatenote service", reqData)
    let header = {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/updateNotes', reqData, true, header)
  }

  deletenoteservice(reqData: any) {
    this.token = localStorage.getItem('token')
    console.log(reqData);

    let headers = {
      headers: new HttpHeaders({

        'Content-type': 'application/json',
        'Authorization': this.token
      })

    }
    return this.httpService.postService('/notes/trashNotes', reqData, true, headers)
  }


  archivedservice(reqData:any){
    console.log("in  archivedservice",reqData)

    let headers ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
      })
    }
    return this.httpService.postService('/notes/archiveNotes',reqData,true,headers)
  }

 trashnoteservice(reqData:any){
   console.log("in  trashnoteservice",reqData);
     let headers = {
       headers:new HttpHeaders({
         'Content-type': 'application/json',
         'Authorization': this.token
       })
     }
     return this.httpService.postService('/notes/trashNotes',reqData,true,headers)
   }


  gettrashservice(){
    
    console.log("inside the trash noteservice");

    let header ={
      headers : new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getTrashNotesList',true,header)
  }

  getarchiveservice(){
    console.log("inside the archive service");

    let header ={

      headers : new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization' : this.token
      })
    }
    return this.httpService.getService('/notes/getArchiveNotesList',true,header)
  }
 

  deleteforever(reqData:any){

    let headers ={
      headers:new HttpHeaders({
        'Content-type':'application/json',
        'Authorization' : this.token
      })
    }
return this.httpService.postService('/notes/deleteForeverNotes', reqData,true,headers)
  }

  changecolorservice(reqData:any){
    console.log("inside the change color service")
    let header ={
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization': this.token
      })
    }
  
    return this.httpService.postService('/notes/changesColorNotes',reqData, true,header)
  }



 }
