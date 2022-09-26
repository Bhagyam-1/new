import { Injectable} from '@angular/core';
import jres from '../service/page1.json';
@Injectable({
  providedIn: 'root'
})
export class ImageService 
{
  arr=jres.form;
  cet=10;cel=160;dsl=-1;dst=-1;del=-1;det=-1;t="";i=0;
  constructor() {}

  f(data:string,data2:string, cell:any)
  {
    this.dsl =-1;
    this.dst =-1;
    this.del =-1;
    this.det =-1;
    this.i = 0;
    this.t = "";
    while (this.i < data.length)
    {
      if (data[this.i] != ',') 
      {
        this.t += data[this.i];
      }
      else 
      {
        if (this.dsl == -1) {
          this.dsl = Number(this.t);
          this.t = "";
        }
        else if (this.dst==-1) {
          this.dst = Number(this.t);
          this.t = "";
        }
        else if (this.del ==-1) {
          this.del = Number(this.t);
          this.t = "";
        }
        else {
          this.det = Number(this.t);
          this.t = "";
        }
      }
      this.i++;
    }
    this.det=Number(this.t);

    cell.nativeElement.style.visibility="visible";
    cell.nativeElement.style.top=String(this.cet+this.dst)+"px";
    cell.nativeElement.style.left=String(this.cel+this.dsl)+"px";
    cell.nativeElement.style.height=String(this.det-this.dst)+"px";
    cell.nativeElement.style.width=String(this.del-this.dsl)+"px";
 }
}
