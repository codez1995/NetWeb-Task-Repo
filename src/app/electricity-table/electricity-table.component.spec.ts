import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityTableComponent } from './electricity-table.component';

describe('ElectricityTableComponent', () => {
  let component: ElectricityTableComponent;
  let fixture: ComponentFixture<ElectricityTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectricityTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
