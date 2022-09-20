import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodProductsService {

  constructor(private http:HttpClient) { }

  addData(product:any){
    return this.http.post("http://localhost:8080/products",product)
  }

  getData(){
    return this.http.get("http://localhost:8080/products");

  }
  updateFood(id:any,product:any){
    return this.http.put(`http://localhost:8080/updateproducts/${id}`, product)

  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:8080/deleteproducts/${id}`)
  }


}
