import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinnkinoComponent } from './finnkino.component';

describe('FinnkinoComponent', () => {
  let component: FinnkinoComponent;
  let fixture: ComponentFixture<FinnkinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinnkinoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinnkinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
