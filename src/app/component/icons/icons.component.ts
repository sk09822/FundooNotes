import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { ActivatedRoute } from '@angular/router';
import { TrashlistComponent } from '../trashlist/trashlist.component';
import { ArchivelistComponent } from '../archivelist/archivelist.component';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  noteId: any
  @Input() noteObject: any
  @Output() iconstodisplay = new EventEmitter<any>();







  colors = [
    {

      name: 'Red', bgColorValue: '#f28b82'
    },
    {
      name: 'Yellow', bgColorValue: '#FFFEA9'

    },
    {
      name: 'Light Green', bgColorValue: '#E4E978'
    },
    {
      name: 'Lime', bgColorValue: '#B3E283'
    },
    {
      name: 'Teal', bgColorValue: '#CDF0EA'
    },
    {
      name: 'white', bgColorValue: '#ffffff'
    }

  ];

  constructor(private NoteService: NoteService, private activatedroute: ActivatedRoute) { }

  isDeleted: boolean = false;
  isTrashed: boolean = false;
  isArchived: boolean = false;


  ngOnInit(): void {


    let del = this.activatedroute.snapshot.component;

    if (del == TrashlistComponent) {
      this.isDeleted = true;
      console.log(this.isDeleted);
    }
    let arc = this.activatedroute.snapshot.component;

    if (arc == ArchivelistComponent) {
      this.isArchived = true;
      console.log(this.isArchived);
    }

  }


  ondelete() {

    this.noteId = this.noteObject['id'];
    let reqData = {
      noteIdList: [this.noteObject.id],

      isDeleted: true

    }
    console.log('deleted', reqData);

    this.NoteService.deletenoteservice(reqData).subscribe((res: any) => {
      console.log(res);
      this.iconstodisplay.emit(res);



    })


  }
  onarchive() {
    this.noteId = this.noteObject['id'];
    let reqData = {
      noteIdList: [this.noteObject.id],
      isArchived: true,


    }
    console.log('archieved', reqData);
    this.NoteService.archivedservice(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response)

    })

  }
  onunarchive() {
    this.noteId = this.noteObject['id'];
    let reqData = {
      noteIdList: [this.noteObject.id],
      isArchived: false
    }
    console.log('unarchieved', reqData);
    this.NoteService.archivedservice(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response)

    })

  }

  ontrash() {
    this.noteId = this.noteObject['id'];
    let reqData = {
      noteIdList: [this.noteObject.id],
      isTrashed: true

    }
    console.log('trashed', reqData);
    this.NoteService.trashnoteservice(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);


    })
  }

  ondeleteforever() {
    this.noteId = this.noteObject['id'];
    let reqData = {
      noteIdList: [this.noteObject.id],
      isDeleted: false,
    }
    console.log('delete forever', reqData);
    this.NoteService.deleteforever(reqData).subscribe((response: any) => {
      console.log(response);
      this.iconstodisplay.emit(response);

    })
  }

  onrestore() {
    this.noteObject.isDeleted =true;
    let reqData = {
      noteIdList: [this.noteObject.id],
      isDeleted: false,
    }
    this.NoteService.trashnoteservice(reqData).subscribe((response: any) => {

      console.log(response.data);
      this.iconstodisplay.emit(response);
    })
  }



  changeColor(noteColor: any) {
    console.log('color', noteColor);
    this.noteObject.color = noteColor
    let reqData = {
      color: noteColor,
      noteIdList: [this.noteObject.id],

    }
    console.log(reqData)
    this.NoteService.changecolorservice(reqData).subscribe((response: any) => {
      console.log("response of set color", response);
      this.iconstodisplay.emit(noteColor)


    })

  }



}






