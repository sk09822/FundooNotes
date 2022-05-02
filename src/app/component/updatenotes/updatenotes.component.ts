import { Component, Inject, OnInit ,inject,Output,EventEmitter} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-updatenotes',
  templateUrl: './updatenotes.component.html',
  styleUrls: ['./updatenotes.component.scss']
})
export class UpdatenotesComponent implements OnInit {
  title:any;
  description: any;
  noteId: any
  

  

  constructor(private NoteService:NoteService, public dialogRef:MatDialogRef<UpdatenotesComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data);
    this.title = this.data.title
    this.description= this.data.description
    this.noteId =this.data.id

  }

  

   onClose() {
 
let reqData ={
  title : this.title,
  description :this.description,
  noteId:this.noteId
}
this.NoteService.updatenoteservice(reqData).subscribe((response:any)=>{
  console.log(response);
  
  
  
 
})

this.dialogRef.close(); 

  
   }
  }
