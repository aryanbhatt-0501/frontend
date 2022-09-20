import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { FoodProducts } from '../class/food-products';
import { FoodProductsService } from 'src/app/Services/food-products.service';

@Component({
  selector: 'app-food-product',
  templateUrl: './food-product.component.html',
  styleUrls: ['./food-product.component.css']
})
export class FoodProductComponent implements OnInit {

  result:any

  products=new FoodProducts()

  constructor(private foodproduct:FoodProductsService,private router:Router) { }

  ngOnInit(): void {
  }

  addProduct(form:NgForm){
    console.log(this.products)

    this.foodproduct.addData(this.products).subscribe((res)=>{
      this.result=res;
      console.log(this.result)
    })
  }

}
