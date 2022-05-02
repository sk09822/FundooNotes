import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-archivelist',
  templateUrl: './archivelist.component.html',
  styleUrls: ['./archivelist.component.scss']
})
export class ArchivelistComponent implements OnInit {

  archiveList: any;

  constructor(private NoteService: NoteService) { }
  
  ngOnInit(): void {
   this.getArchiveList();
  }


  getArchiveList(){
    
    this.NoteService.getarchiveservice().subscribe((response:any)=>{
      console.log("get all archive", response);
      this.archiveList =response
      this.archiveList = this.archiveList.data.data
      this.archiveList.reverse();
    },error =>{
        console.log("Archive Error:", error)
    
    })
  }
}