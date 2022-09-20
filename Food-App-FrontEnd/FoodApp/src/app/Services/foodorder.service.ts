import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodorderService {
  id(id: any, foodOrder: FoodorderService) {
    throw new Error('Method not implemented.');
  }

  constructor(private http:HttpClient) { }
  token = localStorage.getItem('token');

  addData(food:any){
  return this.http.post("http://localhost:8080/saveorders",food,
  {
    headers: new HttpHeaders({
      'Authorization': `Bearer ${this.token}` 
    })
  })
  }
  getData(){
    return this.http.get("http://localhost:8080/orders");

  }
  updateFood(id:any,food:any){
    return this.http.put(`http://localhost:8080/updateorders/${id}`, food,   {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${this.token}` 
      })
    })

  }
  deleteData(id:any){
    return this.http.delete(`http://localhost:8080/orders/${id}`)
  }

  getToken(){
    return localStorage.getItem('token');
  }



}


