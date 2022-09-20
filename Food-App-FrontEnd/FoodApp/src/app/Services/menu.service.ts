import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  addData(menu:any){
    return this.http.post("http://localhost:8080/savemenu",menu)
  }
}
