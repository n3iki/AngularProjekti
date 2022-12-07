import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutviewComponent } from './logoutview.component';

describe('LogoutviewComponent', () => {
  let component: LogoutviewComponent;
  let fixture: ComponentFixture<LogoutviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
