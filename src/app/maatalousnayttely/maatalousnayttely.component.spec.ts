import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaatalousnayttelyComponent } from './maatalousnayttely.component';

describe('MaatalousnayttelyComponent', () => {
  let component: MaatalousnayttelyComponent;
  let fixture: ComponentFixture<MaatalousnayttelyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaatalousnayttelyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaatalousnayttelyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
