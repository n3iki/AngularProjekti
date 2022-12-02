import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaService } from '../cinema.service';
@Component({
  selector: 'app-finnkino',
  templateUrl: './finnkino.component.html',
  styleUrls: ['./finnkino.component.css']
})
export class FinnkinoComponent implements OnInit {
  public cinemaData$: Observable<any>;
  searchText : string = "";

  constructor(private _cinemaService: CinemaService)
  { 
    this.cinemaData$ = this._cinemaService.getData();
  }

  ngOnInit(): void {
    
  }

}
