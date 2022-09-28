import { Component, OnInit } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit 
{
  temp_arr:any;
  constructor(private o:ImageService) {
    this.temp_arr=o.arr;
  }

  ngOnInit(): void {
  }

}
