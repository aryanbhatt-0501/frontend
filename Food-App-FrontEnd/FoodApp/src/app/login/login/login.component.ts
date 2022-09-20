import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/FoodOrder/class/user';
import { UserService } from 'src/app/Services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  user=new User();
  constructor(private login:LoginService,private router:Router) { }
  data:any

  ngOnInit(): void {
  }

  logUser(form:NgForm){

    console.log(form.value);

    this.login.loginUser(form.value).subscribe((res)=>{

      console.log(res);

      this.data=res

      localStorage.setItem('token',this.data.token)
      localStorage.setItem('role',this.data.role)

      //this.router.navigate(['/all-food-order'])

      window.alert("Logged in Succesfull")

    },
    error=>(console.log("")
    )
    //window.alert("Wrong Credentials");
    )
    //window.alert("Wrong Credentials");
}

}
