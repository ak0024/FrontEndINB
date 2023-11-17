import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationWaitingComponent } from './registration-waiting.component';

describe('RegistrationWaitingComponent', () => {
  let component: RegistrationWaitingComponent;
  let fixture: ComponentFixture<RegistrationWaitingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegistrationWaitingComponent]
    });
    fixture = TestBed.createComponent(RegistrationWaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
