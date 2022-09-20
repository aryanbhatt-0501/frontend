import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodProducts } from 'src/app/food-product/class/food-products';
import { Menu } from 'src/app/Menu/class/menu';
import { FoodProductsService } from 'src/app/Services/food-products.service';

@Component({
  selector: 'app-edit-food-product',
  templateUrl: './edit-food-product.component.html',
  styleUrls: ['./edit-food-product.component.css']
})
export class EditFoodProductComponent implements OnInit {

  result:any
  product=new FoodProducts()

  constructor(private foodproduct:FoodProductsService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {

    let id=this.route.snapshot.params['id']
    console.log(id);

    this.foodproduct.getData().subscribe((data)=>{

      this.result=data
      console.log(this.result);

      for(let r of this.result.t){

        if(id==r.id){
          this.product=r;
          console.log(this.product);

        }
      }
    })
  }

  editProduct(form:NgForm){
    this.foodproduct.updateFood(this.product.id,this.product).subscribe((res)=>{
      console.log(res);

      this.router.navigate(['/all-food-product'])

    })
  }

}
