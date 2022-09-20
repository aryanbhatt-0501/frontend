import { Component, OnInit } from '@angular/core';
import {  NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Menu } from '../class/menu';
import { MenuService } from 'src/app/Services/menu.service';
import { User } from 'src/app/FoodOrder/class/user';

@Component({
  selector: 'app-add-menu',
  templateUrl: './add-menu.component.html',
  styleUrls: ['./add-menu.component.css']
})
export class AddMenuComponent implements OnInit {

  result:any

  menu=new Menu()
  user=new User()

  constructor(private menuservice:MenuService,private router:Router) { }

  ngOnInit(): void {
  }

  addMenu(form:NgForm){
    console.log(this.menu);

    this.menuservice.addData(this.menu).subscribe((res)=>{
      this.result=res;
      console.log(this.result);

    })
  }

}
