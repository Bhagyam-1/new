import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Image } from './image.model';
import { ImageService } from 'src/app/service/image.service';//

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {
  @Input() imageData : Image[] = [];
  primaryImage!: Image;
  @Output() passImage = new EventEmitter();

  constructor(private o:ImageService) {}//

  ngOnInit(){
    // console.log("Array data received")
    // console.log(this.imageData)
  }

  imageSelect(imageObject: Image){
    this.primaryImage = imageObject;
    this.passImage.emit(this.primaryImage)

    this.o.cord.next(this.o.cord_arr[imageObject.index]);
    this.o.mark_cell_ref.nativeElement.style.visibility="hidden";
  }
}
