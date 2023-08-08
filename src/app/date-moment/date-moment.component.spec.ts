import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateMomentComponent } from './date-moment.component';

describe('DateMomentComponent', () => {
  let component: DateMomentComponent;
  let fixture: ComponentFixture<DateMomentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateMomentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DateMomentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
