import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolOnWheelsComponent } from './school-on-wheels.component';

describe('SchoolOnWheelsComponent', () => {
  let component: SchoolOnWheelsComponent;
  let fixture: ComponentFixture<SchoolOnWheelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolOnWheelsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolOnWheelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
