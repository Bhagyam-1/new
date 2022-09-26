import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from 'src/app/service/image.service';
@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.css']
})
export class DocumentViewComponent implements OnInit {

  ar;
  img_arr=["https://simpleinvoice17.net/wp-content/uploads/2017/02/lawn-service-invoice-lawn-care-invoice-template-excel-design-invoice-template-1275-x-1650.png",
  "http://walkerhomes.net/wp-content/uploads/2014/03/Invoice-Sample.png",
  "http://merrychristmaswishes.info/wp-content/uploads/2018/09/medical-bill-template-sample-medical-bill-receipt-format-4-medical-bill-template-receipt-templates-VLixmS.jpg"]
  @ViewChild('c') cell:any;
  @ViewChild('im') main_img:any;
  constructor(private o:ImageService) {
    this.ar=o.arr;
   }

  ngOnInit(): void {
  }
  
  f(data:string,data2:string)
  {
      this.o.f(data,data2,this.cell);
  }
  select_f(data:number)
  {
    this.main_img.nativeElement.src=this.img_arr[data];
    if(data==0)
    {
      this.main_img.nativeElement.style.border="2px solid black";
    }
    else{
      this.main_img.nativeElement.style.border="none";
    }
  }
}
