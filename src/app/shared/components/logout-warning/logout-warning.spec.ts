import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutWarning } from './logout-warning';

describe('LogoutWarning', () => {
  let component: LogoutWarning;
  let fixture: ComponentFixture<LogoutWarning>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LogoutWarning]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoutWarning);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
