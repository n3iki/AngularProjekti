import { Component, OnInit } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-templatedrivenform',
  templateUrl: './templatedrivenform.component.html',
  styleUrls: ['./templatedrivenform.component.css']
})
export class TemplatedrivenformComponent implements OnInit {
testPerson = new Person();

onSubmit(form:any)
{
  console.log(this.testPerson)
}
  

  constructor() { }

  ngOnInit(): void {
  }

}


