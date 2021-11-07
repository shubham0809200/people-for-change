import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NayiRaaheinComponent } from './nayi-raahein.component';

describe('NayiRaaheinComponent', () => {
  let component: NayiRaaheinComponent;
  let fixture: ComponentFixture<NayiRaaheinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NayiRaaheinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NayiRaaheinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
