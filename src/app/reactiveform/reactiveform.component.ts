import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})

export class ReactiveformComponent implements OnInit {
  

      //Formin rakennus
      registrationForm: FormGroup;
      //Konstruktori
      constructor() { 
        //////////////////////////Formin konstruktori//////////////////////////////////////////
        this.registrationForm =
        new FormGroup(
          {firstName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
          lastName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
          userName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
          personalId: new FormControl('',[Validators.required, Validators.pattern("^(0[1-9]|[12]\\d|3[01])(0[1-9]|1[0-2])([5-9]\\d\+|\\d\\d-|[01]\\dA)\\d{3}[\\dA-Z]$")]),
          email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
          password: new FormControl('',[Validators.required, Validators.minLength(10),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d\\w\\W]*")]),
          passwordValidation: new FormControl('',[Validators.required]),
          hasAcceptedTerms: new FormControl('',[Validators.required])
        
          }
          
          );
          ///////////////////////////////////////////////////////////////////////////////////
        }
        //submitfunktio:
        onSubmit(){
          console.log(this.registrationForm.value.firstName);
          console.log(this.registrationForm.value.lastName);
          console.log(this.registrationForm.value.userName);
          console.log(this.registrationForm.value.personalId);
          console.log(this.registrationForm.value.email);
          console.log(this.registrationForm.valid);

          this.registrationForm.reset()
          Object.keys(this.registrationForm.controls).forEach(key => {
            this.registrationForm.controls[key].setErrors(null)
          });


        }

        ///////////////////////Formin funktiot//////////////////////////////////////////////
        get firstName()
        {
          return this.registrationForm.get('firstName');
        }

        get lastName()
        {
          return this.registrationForm.get('lastName');
        }

        get userName()
        {
          return this.registrationForm.get('userName');
        }

        get personalId()
        {
          return this.registrationForm.get('personalId');
        }

        get email()
        {
          return this.registrationForm.get('email');
        }

        get password()
        {
          return this.registrationForm.get('password');
        }

        get passwordValidation()
        {
          return this.registrationForm.get('passwordValidation');
        }

        get hasAcceptedTerms()
        {
          return this.registrationForm.get('hasAcceptedTerms');
        }
       /////////////////////////////////////////////////////////////////////////////////////


  ngOnInit(): void {
    

  }

}
