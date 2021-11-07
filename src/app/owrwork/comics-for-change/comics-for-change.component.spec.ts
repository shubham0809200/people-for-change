import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicsForChangeComponent } from './comics-for-change.component';

describe('ComicsForChangeComponent', () => {
  let component: ComicsForChangeComponent;
  let fixture: ComponentFixture<ComicsForChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComicsForChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComicsForChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
