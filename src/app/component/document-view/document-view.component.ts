import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/service/image.service'; //
import { Image } from '../images/image.model';

@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css'],
})
export class DocumentViewComponent implements OnInit {
  @Input()
  imageData!: Image;
  @ViewChild('c') local_mark_cell_ref: any;
  constructor(private o: ImageService) { }

  ngOnInit() { }
  ngAfterViewInit() {
    this.o.mark_cell_ref = this.local_mark_cell_ref;
  }
}
