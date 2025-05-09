import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumbersComponent } from './numbers.component';

describe('NumbersComponent', () => {
  let component: NumbersComponent;
  let fixture: ComponentFixture<NumbersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumbersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
