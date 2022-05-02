import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-trashlist',
  templateUrl: './trashlist.component.html',
  styleUrls: ['./trashlist.component.scss']
})
export class TrashlistComponent implements OnInit {
  trashList : any;

  constructor(private NoteService: NoteService) { }

  ngOnInit(): void {
    this.getTrashList();
   
  }

getTrashList(){
  this.NoteService.gettrashservice().subscribe((response:any)=>{
    console.log("get all trash", response);
    this.trashList =response
    this.trashList = this.trashList.data.data
    this.trashList.reverse();
  },error =>{
      console.log("Trash Error:", error)
  
  })
}




receiveMessagefromdisplaycard($event: any) {
  
  console.log("insidegetallnotes", $event);
 


}
}
