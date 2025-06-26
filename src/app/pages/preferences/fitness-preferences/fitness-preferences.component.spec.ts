import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FitnessPreferencesComponent } from './fitness-preferences.component';

describe('FitnessPreferencesComponent', () => {
  let component: FitnessPreferencesComponent;
  let fixture: ComponentFixture<FitnessPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FitnessPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FitnessPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
