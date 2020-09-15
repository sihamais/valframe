import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DifferentiatorsComponent } from './differentiators.component';

describe('DifferentiatorsComponent', () => {
  let component: DifferentiatorsComponent;
  let fixture: ComponentFixture<DifferentiatorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DifferentiatorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DifferentiatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
