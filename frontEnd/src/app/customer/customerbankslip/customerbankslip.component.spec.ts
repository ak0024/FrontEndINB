import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbankslipComponent } from './customerbankslip.component';

describe('CustomerbankslipComponent', () => {
  let component: CustomerbankslipComponent;
  let fixture: ComponentFixture<CustomerbankslipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerbankslipComponent]
    });
    fixture = TestBed.createComponent(CustomerbankslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
