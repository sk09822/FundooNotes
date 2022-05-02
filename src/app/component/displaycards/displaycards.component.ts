import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenotesComponent } from '../updatenotes/updatenotes.component';



@Component({
  selector: 'app-displaycards',
  templateUrl: './displaycards.component.html',
  styleUrls: ['./displaycards.component.scss']
})
export class DisplaycardsComponent implements OnInit {
  sentmsg: any;

  constructor(public dialog: MatDialog) { }

  @Input() notesArray: any;
  @Output() noteUpdated = new EventEmitter<any>();
  @Output() displaytogetallnotes = new EventEmitter<string>()
  
  



  ngOnInit(): void {
    console.log(this.notesArray);
  }

  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdatenotesComponent, {
      "width": "600px",
      data: note

    });
    dialogRef.afterClosed().subscribe(res => {
      console.log('The dialog was closed');
      this.noteUpdated.emit(res);


    });


  }
  operation(value: any) {
    this.noteUpdated.emit(value);
  }


  recievefromiconstodisplaycard($event: any) {
    console.log("recievedindisplay", $event);
    this.sentmsg = $event
    this.displaytogetallnotes.emit(this.sentmsg)

  }
}





