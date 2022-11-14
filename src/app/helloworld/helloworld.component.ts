import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-helloworld',
  templateUrl: './helloworld.component.html',
  styleUrls: ['./helloworld.component.css']
})
export class HelloworldComponent implements OnInit {

  title : string = "Hello world";
  itemImageUrl = 'https://material.angularjs.org/1.1.0/img/icons/angular-logo.svg'
  teksti: string = "Otsikko";

  onButtonClicked()
  {
    if(this.itemImageUrl == 'https://material.angularjs.org/1.1.0/img/icons/angular-logo.svg')
    {
    this.itemImageUrl = 'https://rapidapi.com/blog/wp-content/uploads/2018/06/logo-2582748_640.png';
    }
    else
    {
      this.itemImageUrl = 'https://material.angularjs.org/1.1.0/img/icons/angular-logo.svg';
    }

    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
