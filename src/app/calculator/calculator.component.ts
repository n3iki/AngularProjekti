import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: string = "";
  buttons: string[] = ['7','8','9','/','4','5','6','*','1','2','3','-','C','0','+','='];

  addValue(btnValue:string):void
  {

    //nollaa ei voi laittaa ensimmäiseksi numeroksi:
    if (btnValue=="0" || btnValue =="/" || btnValue == "*" || btnValue == "-" || btnValue == "+" || btnValue == "=")
    {
      if (this.result=="" )
      {
        return;
      }
    }

    //= -merkin logiikka
      if( btnValue == "=")
      {
        try
        {
        this.result = eval(this.result);
        }
        catch (error) {
          console.error(error);
          this.result = "ERROR";
        }
      }
    
    //C-merkin logiikka, tyhjennys
    else if (btnValue == "C")
    {
      this.result = "";
    }

    else
    {
    this.result = this.result + btnValue;
    console.log(this.result);
    }
    

  }

  constructor() { }

  ngOnInit(): void {
  }

}
