import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SamzhoToExpressComponent } from './samzho-to-express.component';

describe('SamzhoToExpressComponent', () => {
  let component: SamzhoToExpressComponent;
  let fixture: ComponentFixture<SamzhoToExpressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SamzhoToExpressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SamzhoToExpressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
