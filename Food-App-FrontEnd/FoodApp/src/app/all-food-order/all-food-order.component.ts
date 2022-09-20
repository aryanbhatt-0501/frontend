import { Component, OnInit } from '@angular/core';
import { FoodOrder } from '../FoodOrder/class/food-order';
import { FoodorderService } from '../Services/foodorder.service';

@Component({
  selector: 'app-all-food-order',
  templateUrl: './all-food-order.component.html',
  styleUrls: ['./all-food-order.component.css']
})
export class AllFoodOrderComponent implements OnInit {
result:any


  constructor(private foodOrder:FoodorderService) { }

  ngOnInit(): void {

    this.foodOrder.getData().subscribe((data)=>{

      this.result=data;
      console.log(this.result);
      
    })


  }

  deleteFood(id:any){
    this.foodOrder.deleteData(id).subscribe((res)=>{
      console.log(res);
      
    })
  }


}
