import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicingOverview } from './invoicing-overview';

describe('InvoicingOverview', () => {
  let component: InvoicingOverview;
  let fixture: ComponentFixture<InvoicingOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicingOverview]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicingOverview);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
