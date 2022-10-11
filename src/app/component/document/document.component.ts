import { Component, OnInit } from '@angular/core';
import { Image } from 'src/app/component/images/image.model';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {
  imageData: Image[] = [];
  jsonData : any;
  primaryImage!: Image;

  show = true;
x=true;
y=false;

  constructor() {
  }

  ngOnInit() {
    this.imageData = [
      new Image("http://merrychristmaswishes.info/wp-content/uploads/2018/09/medical-bill-template-sample-medical-bill-receipt-format-4-medical-bill-template-receipt-templates-VLixmS.jpg", "../../assets/page1.json",0),
      new Image("http://walkerhomes.net/wp-content/uploads/2014/03/Invoice-Sample.png", "../../assets/page2.json",1),
      new Image("https://simpleinvoice17.net/wp-content/uploads/2017/02/lawn-service-invoice-lawn-care-invoice-template-excel-design-invoice-template-1275-x-1650.png", "../../assets/page3.json",2)
    ]
    this.primaryImage = this.imageData[0];
  }

  updateImage(newImage: Image){
    this.primaryImage = newImage
  }

svg_clicked()
{
  this.show = !this.show;
  this.x=true;
  this.y=false;
}

svg_clicked1()
{
  this.show = !this.show;
  this.x=false;
  this.y=true;
}



}
