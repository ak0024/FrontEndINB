import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerforgotpasswordComponent } from './customerforgotpassword.component';

describe('CustomerforgotpasswordComponent', () => {
  let component: CustomerforgotpasswordComponent;
  let fixture: ComponentFixture<CustomerforgotpasswordComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerforgotpasswordComponent]
    });
    fixture = TestBed.createComponent(CustomerforgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
