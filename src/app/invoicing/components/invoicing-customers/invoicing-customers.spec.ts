import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingCustomers } from './invoicing-customers';

describe('InvoicingCustomers', () => {
  let component: InvoicingCustomers;
  let fixture: ComponentFixture<InvoicingCustomers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicingCustomers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicingCustomers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
