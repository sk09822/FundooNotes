import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service'

@Component({
  selector: 'app-takenote',
  templateUrl: './takenote.component.html',
  styleUrls: ['./takenote.component.scss']
})
export class TakenoteComponent implements OnInit {
  
  Title: any;
  Description: any;
  panelOpenState = false;
  div1: boolean = true;
  div2: boolean = false;
  span1: boolean = false;
  @Output() createToGetAllNotes = new EventEmitter<string>()

  constructor(private NoteService: NoteService) { }

  ngOnInit(): void {
  }
  expansiondiv() {
    this.div1 = false;  
    this.span1 = true;
    this.div2 = true;
  }
  closeexpansiondiv() {
    this.div1 = true;
    this.span1 = false;
  }
  onclose() {
    this.span1 = false;
    this.panelOpenState = false;
    this.div1 = true;
    this.div2 = false;


    let reqData = {
      'title': this.Title,
      'description': this.Description
    }

    this.NoteService.takeNoteService(reqData).subscribe((response: any) => {

      console.log(response);
      this.createToGetAllNotes.emit(response);
    });

  }
}
