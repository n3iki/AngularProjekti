import { Component, OnInit } from '@angular/core';
import { LippuserviceService } from '../lippuservice.service';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-maatalousnayttely',
  templateUrl: './maatalousnayttely.component.html',
  styleUrls: ['./maatalousnayttely.component.css']
})
export class MaatalousnayttelyComponent implements OnInit {
  public lippus:any[] = [];
  public lippujenHinta:any = 0;
  private counter = 0;

  //Formin rakennus
  ticketForm: FormGroup;

  addTicket(lippuID:any)
  {   
    this.lippus[lippuID].Maara =  this.lippus[lippuID].Maara+1;
    this.lippujenHinta= this.lippujenHinta + this.lippus[lippuID].Hinta;
  }

  ticketDiscount(evt:any)
  {
    if ( evt.value == 1 && this.counter == 0 ) {
    this.lippujenHinta = this.lippujenHinta*0.85;
    this.counter = this.counter +1;
    }

    if (evt.value == 2 && this.counter > 0)
    {
      this.lippujenHinta = this.lippujenHinta/(1-0.15);
      this.counter = this.counter -1;
    }
  }

  removeTicket(lippuID:any)
  {
    if(this.lippus[lippuID].Maara >= 1)
    {
    this.lippus[lippuID].Maara =  this.lippus[lippuID].Maara-1;
    this.lippujenHinta = this.lippujenHinta - this.lippus[lippuID].Hinta;
    }
  }

  onSubmit(){
    this._lippuService.postTicket(this.ticketForm.value.firstName, this.ticketForm.value.lastName, this.ticketForm.value.email, this.lippujenHinta, this.lippus)
    this.ticketForm.reset()
    Object.keys(this.ticketForm.controls).forEach(key => {
      this.ticketForm.controls[key].setErrors(null)
    });


  }


  constructor(private _lippuService: LippuserviceService) {

     //////////////////////////Formin konstruktori//////////////////////////////////////////
     this.ticketForm =
     new FormGroup(
       {firstName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
       lastName: new FormControl('',[Validators.required, Validators.minLength(2),Validators.pattern("^[a-zA-Z ]*$")]),
       email: new FormControl('',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
     
       }
       
       );
       ///////////////////////////////////////////////////////////////////////////////////
    
   }
///////////////////////Formin funktiot//////////////////////////////////////////////
get firstName()
{
  return this.ticketForm.get('firstName');
}

get lastName()
{
  return this.ticketForm.get('lastName');
}


get email()
{
  return this.ticketForm.get('email');
}

/////////////////////////////////////////////////////////////////////////////////////
  ngOnInit(): void {
    this.lippus = this._lippuService.getTickets();
  }

}
