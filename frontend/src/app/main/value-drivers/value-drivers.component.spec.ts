import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueDriversComponent } from './value-drivers.component';

describe('ValueDriversComponent', () => {
  let component: ValueDriversComponent;
  let fixture: ComponentFixture<ValueDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValueDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValueDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
