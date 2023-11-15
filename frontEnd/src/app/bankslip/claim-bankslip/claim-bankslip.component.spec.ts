import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimBankslipComponent } from './claim-bankslip.component';

describe('ClaimBankslipComponent', () => {
  let component: ClaimBankslipComponent;
  let fixture: ComponentFixture<ClaimBankslipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClaimBankslipComponent]
    });
    fixture = TestBed.createComponent(ClaimBankslipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
