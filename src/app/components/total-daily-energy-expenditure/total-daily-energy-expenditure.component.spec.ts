import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDailyEnergyExpenditureComponent } from './total-daily-energy-expenditure.component';

describe('TotalDailyEnergyExpenditureComponent', () => {
  let component: TotalDailyEnergyExpenditureComponent;
  let fixture: ComponentFixture<TotalDailyEnergyExpenditureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotalDailyEnergyExpenditureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalDailyEnergyExpenditureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
