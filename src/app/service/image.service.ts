import { ElementRef, Injectable,OnInit } from '@angular/core';
import cord1 from '../../assets/page1.json';
import cord2 from '../../assets/page2.json';
import cord3 from '../../assets/page3.json';
import { BehaviorSubject } from 'rxjs';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImageService implements OnInit{
  cord = new BehaviorSubject(cord1.form);
  cord_arr:{
    "id": number,
    "text": string,
    "box": number[],
    "linking": any[],//
    "label": string,
    "words":{
        "text": string,
        "box": number[]
      }[]
  }[][]=[];
  ind = new BehaviorSubject(0);
  mark_cell_ref!:ElementRef;//
  jsonDataResult: any;

  constructor() {
    this.cord_arr=[cord1.form,cord2.form,cord3.form];
  }

  ngOnInit(): void {
  }

  f(data: number[], label:string) {
    
    if (this.mark_cell_ref != null) {
      this.mark_cell_ref.nativeElement.style.visibility = "visible";
      this.mark_cell_ref.nativeElement.style.top = String(0 + data[1]) + "px";
      this.mark_cell_ref.nativeElement.style.left = String(150 + data[0]) + "px";
      this.mark_cell_ref.nativeElement.style.height = String(data[3] - data[1]) + "px";
      this.mark_cell_ref.nativeElement.style.width = String(data[2] - data[0]) + "px";

      if(label=="other")  //  other ke bina agr border ki property lagayenge to hamesha blue hi rahega border.....
      this.mark_cell_ref.nativeElement.style.border = "1.5px solid blue";

      if(label=="question")
      this.mark_cell_ref.nativeElement.style.border = "1.5px solid red";

      if(label=="answer")
      this.mark_cell_ref.nativeElement.style.border = "1.5px solid green";

      if(label=="header")
      this.mark_cell_ref.nativeElement.style.border = "1.5px solid yellow";

    }

  }

  f2(color:string)
  {
  if(color=="red")
  this.mark_cell_ref.nativeElement.style.border = "1.5px solid red";

  else if(color=="green")
  this.mark_cell_ref.nativeElement.style.border = "1.5px solid green";

  else if(color=="yellow")
  this.mark_cell_ref.nativeElement.style.border = "1.5px solid yellow";

  else
  this.mark_cell_ref.nativeElement.style.border = "1.5px solid blue";
  }
   








  // getData(path){
  //   this.http.get(path).subscribe((res) => {
  //     this.jsonDataResult = res;
  //     console.log('--- result :: ',  this.jsonDataResult);
  //   });
  //   return this.jsonDataResult;
  // }
}