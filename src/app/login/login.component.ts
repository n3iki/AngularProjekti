import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  //Formin rakennus
  loginForm: FormGroup;
  //Konstruktori
  constructor(public router: Router) { 
    //////////////////////////Formin konstruktori//////////////////////////////////////////
    this.loginForm =
    new FormGroup(
      {email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required])
      }
      
      );
      ///////////////////////////////////////////////////////////////////////////////////
    }

    //getterit
    get email()
    {
      return this.loginForm.get('email');
    }
    get password()
    {
      return this.loginForm.get('password');
    }


    logIn(){
      console.log(this.loginForm.value.email + " logged in");
      this.router.navigate(['admin/main']);
    }
    peruuta()
    {
      this.router.navigate(['homepage']);
    }


  ngOnInit(): void {
  }

}
