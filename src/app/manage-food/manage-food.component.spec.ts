import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFooodComponent } from './manage-food.component';

describe('ManageFooodComponent', () => {
  let component: ManageFooodComponent;
  let fixture: ComponentFixture<ManageFooodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManageFooodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageFooodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
