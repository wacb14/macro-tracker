import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnCancelBackComponent } from './btn-cancel-back.component';

describe('BtnCancelBackComponent', () => {
  let component: BtnCancelBackComponent;
  let fixture: ComponentFixture<BtnCancelBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BtnCancelBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnCancelBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
