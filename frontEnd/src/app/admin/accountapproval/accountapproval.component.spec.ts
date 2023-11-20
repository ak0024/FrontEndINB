import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountapprovalComponent } from './accountapproval.component';

describe('AccountapprovalComponent', () => {
  let component: AccountapprovalComponent;
  let fixture: ComponentFixture<AccountapprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountapprovalComponent]
    });
    fixture = TestBed.createComponent(AccountapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
