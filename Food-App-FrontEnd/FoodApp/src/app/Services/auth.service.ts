import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn(){

    if(localStorage.getItem("token") && localStorage.getItem("role")==="Manager"){

      return true;

    }else

    {

      return false;

    }

}

}
