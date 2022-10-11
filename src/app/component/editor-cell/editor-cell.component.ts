import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-editor-cell',
  templateUrl: './editor-cell.component.html',
  styleUrls: ['./editor-cell.component.css']
})
export class EditorCellComponent implements OnInit {

@ViewChild('c')check:any;

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  // f()
  // {
  //   if(this.check.nativeElement.children[1].value=='other')
  //   this.check.nativeElement.style.backgroundColor="white"


  //   if(this.check.nativeElement.children[1].value=='question')
  //   this.check.nativeElement.style.backgroundColor="red"

  //   if(this.check.nativeElement.children[1].value=='answer')
  //   this.check.nativeElement.style.backgroundColor="green"
    
  //   if(this.check.nativeElement.children[1].value=='header')
  //   this.check.nativeElement.style.backgroundColor="yellow"

  // }


}
