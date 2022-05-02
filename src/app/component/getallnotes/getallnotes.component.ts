import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';


@Component({
  selector: 'app-getallnotes',
  templateUrl: './getallnotes.component.html',
  styleUrls: ['./getallnotes.component.scss']
})
export class GetallnotesComponent implements OnInit {
  list: any = [];
  // Notelist: any =[{title:'note',description:'value', id : '1'},{title:'note',description:'value', id : '1'},{title:'note',description:'value', id : '1'}];
  Notelist: any=[];
  notes: any ;
  
  
 

  constructor(private httpGetAllNote: NoteService) { }

  ngOnInit(): void {
    this.getallnotes();
  }


getallnotes()
{
  this.httpGetAllNote.getNoteList().subscribe((resp:any)=>{
    
    this.Notelist = resp.data.data;
    console.log(resp);
    this.Notelist = this.Notelist.filter((data:any)=>{
      console.log(data.isDeleted)
      return data.isDeleted === false && data.isArchived ===false;
    })
    
  },
(error)=>{
  console.log('get note error',error);
}
  )}
  

  receiveEvent($event: any) {
    this.getallnotes();
  }
  updatedData(value: any) {

    this.getallnotes()
  }
}
