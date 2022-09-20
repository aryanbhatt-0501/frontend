import { Component, OnInit } from '@angular/core';
import { ItemComponent } from '../item/item.component';
import { ItemsService } from '../Services/items.service';

@Component({
  selector: 'app-all-item',
  templateUrl: './all-item.component.html',
  styleUrls: ['./all-item.component.css']
})
export class AllItemComponent implements OnInit {

  result:any;
  constructor(private items:ItemsService) { }

  ngOnInit(): void {

    this.items.getData().subscribe((data)=>{
      this.result=data;
      console.log(this.result)
    })
  }
  deleteItem(id:any){
    this.items.deleteData(id).subscribe((res)=>{
      console.log(res);
      
    })
  }


}
