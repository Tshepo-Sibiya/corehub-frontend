import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GymBuddy } from './gym-buddy';

describe('GymBuddy', () => {
  let component: GymBuddy;
  let fixture: ComponentFixture<GymBuddy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GymBuddy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GymBuddy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
