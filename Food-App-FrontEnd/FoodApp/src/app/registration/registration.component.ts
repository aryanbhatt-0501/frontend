import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../FoodOrder/class/user';
import { UserService } from '../Services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private user:UserService) { }


  ngOnInit(): void {
  }

  regUser(form:NgForm){
    console.log(form.value);

    this.user.saveUser(form.value).subscribe((res)=>{
      console.log(res);
      
    })
  }

}
