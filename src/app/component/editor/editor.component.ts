import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageService } from '../../service/image.service';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css'],
})
export class EditorComponent implements OnInit {
  temp_arr: {
    id: number;
    text: string;
    box: number[];
    linking: number[][];
    label: string;
    words: {
      text: string;
      box: number[];
    }[];
  }[] = [];

 @ViewChild('s')set:any;

question:boolean=false;

  constructor(private o: ImageService) {
    this.o.cord.subscribe((d) => {
      this.temp_arr = d;
    });
  }

  ngOnInit(): void {}
  id_no!:number;
  link=0;
  linking_var!:number;
  last:number[]=[];


  f(data: number[], label:string, id:number) 
  {
    if(label=="answer")
    {
    if(this.link==1 && this.temp_arr[id].linking[0].length==0 && this.temp_arr[this.id_no].linking[0].length==0)
    {
    if(this.last[0]<data[0])
    data[0]=this.last[0];

    else
    this.last[0]=data[0];

    if(this.last[1]<data[1])
    data[1]=this.last[1];

    else
    this.last[1]=data[1];

    if(this.last[2]>data[2])
    data[2]=this.last[2];

    else
    this.last[2]=data[2];
    
    if(this.last[3]>data[3])
    data[3]=this.last[3];

    else
    this.last[3]=data[3];

    this.link=0;

    this.temp_arr[id].linking[0].push(this.id_no);
    this.temp_arr[this.id_no].linking[0].push(id);


    }

    this.o.f(data, label); // label added to check whether it is other or not
    }

    else
    {
    this.o.f(data, label);

    if(this.link>0)
    this.link--;
    }

  }




  f2(data: number, data2: number) 
  {

    if (data2 == 0) return;

    if (data2 == 1) 
    {
      this.temp_arr[data].label = 'other';
      this.o.f2('blue');
    }

    else if (data2 == 2) 
    {
    this.temp_arr[data].label = 'question';
    this.o.f2('red');
    }
    
    else if (data2 == 3)
    {
    this.temp_arr[data].label = 'answer';
    this.o.f2('green');
    }

    else
    {
    this.temp_arr[data].label = 'header';
    this.o.f2('yellow');
    }

  }



  link_func(link_arr: number[], id:number)
  {
    this.link=2;
    this.last=link_arr;
    this.id_no=id;
  }



  delink_func(i:any)
  {
  this.temp_arr[i[0]].linking[0].splice(0,1);
  i.splice(0,1);
  console.log(i);
  }

}
