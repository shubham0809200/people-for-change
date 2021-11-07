import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnmanifestoComponent } from './unmanifesto.component';

describe('UnmanifestoComponent', () => {
  let component: UnmanifestoComponent;
  let fixture: ComponentFixture<UnmanifestoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnmanifestoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnmanifestoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
