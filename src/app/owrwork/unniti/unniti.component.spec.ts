import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnnitiComponent } from './unniti.component';

describe('UnnitiComponent', () => {
  let component: UnnitiComponent;
  let fixture: ComponentFixture<UnnitiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnnitiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnnitiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
