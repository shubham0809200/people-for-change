import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OwrworkComponent } from './owrwork.component';

describe('OwrworkComponent', () => {
  let component: OwrworkComponent;
  let fixture: ComponentFixture<OwrworkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OwrworkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OwrworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
