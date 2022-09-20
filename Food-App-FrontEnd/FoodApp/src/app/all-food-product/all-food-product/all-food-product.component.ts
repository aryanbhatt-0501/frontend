import { Component, OnInit } from '@angular/core';

import { FoodProducts } from 'src/app/food-product/class/food-products';
import { FoodProductsService } from 'src/app/Services/food-products.service';

@Component({
  selector: 'app-all-food-product',
  templateUrl: './all-food-product.component.html',
  styleUrls: ['./all-food-product.component.css']
})
export class AllFoodProductComponent implements OnInit {

  result:any
  


  constructor(private foodProduct:FoodProductsService) { }

  ngOnInit(): void {
    this.foodProduct.getData().subscribe((data)=>{
      this.result=data
      console.log(this.result);
    })
  }

  deleteFood(id:any){
    this.foodProduct.deleteData(id).subscribe((res)=>{
      console.log(res);
    })
  }

}


