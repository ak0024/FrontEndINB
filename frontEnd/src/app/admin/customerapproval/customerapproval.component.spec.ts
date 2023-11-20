import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerapprovalComponent } from './customerapproval.component';

describe('CustomerapprovalComponent', () => {
  let component: CustomerapprovalComponent;
  let fixture: ComponentFixture<CustomerapprovalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerapprovalComponent]
    });
    fixture = TestBed.createComponent(CustomerapprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
